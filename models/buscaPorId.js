const conexao = require('../infraestrutura/conexao')

class BuscaPorId {
    buscaPorId(id, res) {
        const sql = `SELECT * FROM saladeaula WHERE id=$1`

        conexao.query(sql, [id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados.rows[0])
            }
        })
    }
}

module.exports = new BuscaPorId