const conexao = require('../infraestrutura/conexao')

class RespostaSimilar {

    altera(id,valores, res){
       
        const sql = "UPDATE saladeaula SET resposta_similar1 = $1, resposta_similar2 = $2, resposta_similar3 = $3, resposta_similar4 = $4, resposta_similar5 = $5 WHERE id=$6"

        const {resposta_similar1, resposta_similar2, resposta_similar3, resposta_similar4, resposta_similar5} = valores

        conexao.query(sql, [resposta_similar1, resposta_similar2, resposta_similar3, resposta_similar4, resposta_similar5, id], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, id})
            }
        })
    }
}

module.exports = new RespostaSimilar