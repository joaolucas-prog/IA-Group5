import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_ENDPOINT = "http://localhost:4000/";

const HomePage = (props) => {
  const [IDPergunta, setIDPergunta] = useState("");
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
    let assuntosSplitados = assunto_sugeridos.split(',');
    setAssuntosSugeridos(assuntosSplitados);
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

  function ShowQuestion({Pergunta}) {
    if(Pergunta){
      return <div className="container-answer mt-5 text-center" id="container-answer">
        <div className="dropdown">
          <button className="dropbtn" id ="dropbtn">
            O assunto sugerido foi satisfatório? <br/>
            Em caso negativo, pode nos sugerir um assunto mais adequado?
          </button>
          <div className="dropdown-content">
            {assuntosSugeridos?.map((assunto, index) => (<a className="TextCapitalize" key={index} onClick={() => AtualizaAssuntoCorrecao(IDPergunta, assunto)}>{assunto}</a>))}
          </div>
        </div>
        <div>
            <div className="container-answer-content">
              <p><h2>Assunto</h2> <br/> {Pergunta.assunto}</p>
            </div>
            <div className="container-answer-content">
              <p><h2>Unidade gestora</h2> <br/> {Pergunta.unidade_gestora}</p>
            </div>
            <div className="container-answer-content">
              <p><h2>Pergunta</h2> <br/> {Pergunta.descricao_tratada}</p>
            </div>
            <div className="container-answer-content">
              <p><h2>Resposta</h2> <br/> {Pergunta.resposta_publica}</p>
            </div>
        </div>
      </div>
    }
    else{
      return (<div></div>);
    }
  }

  return (
    <div id="grad1" className="main">
        <div className="container">
          <h3 className="title">Ouvidoria</h3>
          <p className="description">Digite seu protocolo na caixa abaixo, para receber as informações desejadas.</p>
          <div className="pergunta">
            <h1>Digite o ID da pergunta</h1>
            <form id="myForm" onSubmit={SearchQuestion}>
              <input type="text" name="idPergunta" className="question" id="idPergunta" required onChange={(event) => setIDPergunta(event.target.value)} />
              <label></label>
              <input type="submit" className="button" value="Procurar"/>
            </form>
            <ShowQuestion Pergunta={pergunta}/>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
