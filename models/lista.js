const conexao = require('../infraestrutura/conexao')

class Lista {

    lista(res){
        const sql = 'SELECT * FROM saladeaula ORDER BY id'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows[0])
            }
        })
    }
}

module.exports = new Lista