const conexao = require('../infraestrutura/conexao')

class Altera {

    altera(codigo_pergunta,valores, res){
       
        const sql = "UPDATE saladeaula SET assunto_correcao = $1,assunto_sugerido = $2, palavachave1 = $3, palavachave2 = $4, palavachave3 = $5, palavachave4 = $6, palavachave5 = $7, respostasimi1 = $8, respostasimi2 = $9, respostasimi3 = $10, respostasimi4 = $11, respostasimi1 = $12 WHERE codigo_pergunta=$13"

        const {assunto_correcao, assunto_sugerido, palavachave1, palavachave2, palavachave3, palavachave4,palavachave5, respostasimi1, respostasimi2, respostasimi3, respostasimi4, respostasimi5} = valores

        conexao.query(sql, [assunto_correcao, assunto_sugerido, palavachave1, palavachave2, palavachave3, palavachave4,palavachave5, respostasimi1, respostasimi2, respostasimi3, respostasimi4, respostasimi5, codigo_pergunta], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, id})
            }
        })
    }

    corrigeAssuntoCorrecao(codigo_pergunta, valores, res) {
        const sql = "UPDATE saladeaula SET assunto_correcao = $1 WHERE codigo_pergunta=$2";

        const {assunto_correcao} = valores;

        conexao.query(sql, [assunto_correcao, codigo_pergunta], (erro, resultados)=>{
            console.log(erro, resultados);

            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, codigo_pergunta})
            }
        })
    }
}

module.exports = new Altera
