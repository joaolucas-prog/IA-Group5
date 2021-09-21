import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NovaForm from "../components/novaform";

const API_ENDPOINT = "http://localhost:4000/";

const HomePage = (props) => {
  const [IDPergunta, setIDPergunta] = useState("");
  const [NovaResposta, setNovaResposta] = useState("");
  const [pergunta, setPergunta] = useState(null);
  const [assuntos, SetAssuntos] = useState([]);
  const [assuntosSugeridos, setAssuntosSugeridos] = useState([]);

  useEffect(() => {
    GetAssuntosSugeridos();
  }, [pergunta]);

  function SearchQuestion(event) {
    event.preventDefault();
    axios
      .get(`${API_ENDPOINT}orientacao/?idPergunta=${IDPergunta}`)
      .then((response) => {
        let data = response.data;
        setPergunta(data);
        ShowAssuntosSugeridos(data.assunto_sugerido);                
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ShowAssuntosSugeridos(assunto_sugeridos) {
    if(assunto_sugeridos){
      let assuntosSplitados = assunto_sugeridos.split(',');
      setAssuntosSugeridos(assuntosSplitados);
    }
  }

  function GetAssuntosSugeridos(){
    axios.get(`${API_ENDPOINT}assuntos`)
    .then((response) => {
      SetAssuntos(response.data);
    })
    .catch((error) => console.log(error));
  }

  function AtualizaAssuntoCorrecao(id_pergunta, assunto_correcao) {
    axios.patch(`${API_ENDPOINT}orientacao/assunto_correcao/${id_pergunta}`, { assunto_correcao })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error))
  }

  function OrganizaRespostasSimilares(data){
    let perguntasSimilares = [];
      perguntasSimilares.push(data.resposta_similar1);
      perguntasSimilares.push(data.resposta_similar2);
      perguntasSimilares.push(data.resposta_similar3);
      perguntasSimilares.push(data.resposta_similar4);
      perguntasSimilares.push(data.resposta_similar5);
      return perguntasSimilares;
  }

  function AtualizaNovaResposta(valor){
    console.log("Nova Resposta", valor);
    setNovaResposta(valor);
  }

  function ShowQuestion({Pergunta}) {
    if(Pergunta){
      Pergunta.respostas_similares = OrganizaRespostasSimilares(Pergunta);
      return (
      <div className="container-answer mt-5 text-center" id="container-answer">
        <div className="row">
          <div className="col-md-12">
            <div className="container-answer-content">
              <p><h2>Pergunta</h2>{Pergunta.descricao_tratada}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container-answer-content">
              <p><h2>Unidade Gestora</h2>{Pergunta.unidade_gestora}</p>
            </div>
          </div>
        </div>
        
        <div className="row">
        <div className="row">
          <div className="col-md-6">
            <div className="container-answer-content">
              <p><h2>Assunto sugerido</h2>{Pergunta.assunto}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dropdown">
              <button className="dropbtn" id ="dropbtn">
                O assunto sugerido foi satisfatório? <br/>
                Em caso negativo, pode nos sugerir um assunto mais adequado?
              </button>
              <div className="dropdown-content">
                {assuntosSugeridos?.map((assunto, index) => (<a className="TextCapitalize" key={index} onClick={() => AtualizaAssuntoCorrecao(IDPergunta, assunto)}>{assunto}</a>))}
              </div>
            </div>
          </div>
          
          
        </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container-answer-content">
              <p><h2>Resposta</h2>{Pergunta.resposta_publica}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container-answer-content">
              <p><h2>Palavras chave</h2> #{Pergunta.palavra_chave1} #{Pergunta.palavra_chave2} #{Pergunta.palavra_chave3} #{Pergunta.palavra_chave4} #{Pergunta.palavra_chave5}</p>
            </div>
          </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Respostas similares</h3>
            <div className="btn-group">
              {Pergunta.respostas_similares.map((pergunta, index) => {
                if(pergunta){
                  return (<button key={index} type="button" className="btn btn-primary mt-4 test" onClick={(event) => {
                    AtualizaNovaResposta(pergunta);
                  }}>{pergunta}</button>);
                }
              })}
            </div>
          </div>
        </div>
        </div>
      </div>)
    }
    else{
      return (<div className="m-4"><h2>Nenhuma pergunta selecionada.</h2></div>);
    }
  }  

  return (
    <div id="grad1" className="main">
        <div className="container">
          <h3 className="title">Ferramenta de apoio à orientação</h3>
          <p className="description">Digite seu protocolo na caixa abaixo.</p>

          <div className="pergunta">
            

            <form id="myForm" onSubmit={SearchQuestion}>
              <input type="text" name="idPergunta" className="question" id="idPergunta" required onChange={(event) => setIDPergunta(event.target.value)} />
              <label></label>
              <input type="submit" className="button" value="Procurar"/>
            </form>

            <ShowQuestion Pergunta={pergunta}/>

            <NovaForm AlteraDados={AtualizaNovaResposta.bind(this)} IdPergunta={IDPergunta} Pergunta={pergunta} Valor={NovaResposta}/>

            {NovaResposta}
            <br></br><br></br>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
