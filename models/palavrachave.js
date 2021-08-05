const conexao = require('../infraestrutura/conexao')

class AlteraPalavra {

    altera(id,valores, res){
       
        const sql = "UPDATE saladeaula SET palavra_chave1 = $1, palavra_chave2 = $2, palavra_chave3 = $3, palavra_chave4 = $4, palavra_chave5 = $5 WHERE id=$6"

        const {palavra_chave1, palavra_chave2, palavra_chave3, palavra_chave4, palavra_chave5} = valores

        conexao.query(sql, [palavra_chave1, palavra_chave2, palavra_chave3, palavra_chave4, palavra_chave5, id], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, id})
            }
        })
    }
}

module.exports = new AlteraPalavra