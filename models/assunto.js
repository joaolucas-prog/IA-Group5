const conexao = require('../infraestrutura/conexao')

class Assunto {

    altera(id,valores, res){
       
        const sql = "UPDATE saladeaula SET assunto_correcao = $1, assunto_sugerido = $2 WHERE id=$6"

        const {assunto_correcao, assunto_sugerido} = valores

        conexao.query(sql, [assunto_correcao, assunto_sugerido, id], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, id})
            }
        })
    }
}

module.exports = new Assunto