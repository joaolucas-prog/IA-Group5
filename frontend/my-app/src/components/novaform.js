import axios from 'axios';

const API_ENDPOINT = "http://localhost:4000";

const NovaForm = ({Valor, IdPergunta, Pergunta, AlteraDados}) => {

    function AtualizaResposta(event) {
        event.preventDefault();
        console.log("Atualiza os dados");
        axios.patch(`${API_ENDPOINT}/orientacao/${IdPergunta}/resposta_escolhida`, {
            'resposta_escolhida': Valor
        }).then((response) => {
            alert('Atualizado');
        })
        .catch(err => console.error(err))
    }

    function AlteraDadosNoPai(event) {
        AlteraDados(event.target.value);
    }

    return Pergunta ? 
            (<div className="form-group">
                <form onSubmit={AtualizaResposta}>
                    <label>Nova resposta:</label>
                    <input type="text" className="form-control" value={Valor} name="novaResposta" onChange={AlteraDadosNoPai}></input>
                    {Pergunta.RespostasSimilares}
                    <button type="submit" className="btn mt-2 btn-primary"> Atualizar resposta </button>
                </form></div>) : <></>;

}

export default NovaForm;