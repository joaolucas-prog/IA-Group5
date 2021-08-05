const conexao = require('../infraestrutura/conexao')

class Deleta {

    deleta(id, res){
        const sql = 'DELETE FROM saladeaula WHERE id=$1'

        conexao.query(sql, [id], (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Deleta