const conexao = require('../infraestrutura/conexao')

class BuscaTodosAssuntos {
  buscaTodosAssuntos(response) {

    const sql = `SELECT assunto FROM saladeaula GROUP BY assunto`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        response.status(400).json(erro);
      } else {
        const listReturn = []
        resultados.rows.map(result => listReturn.push(result.assunto))
        response.status(200).json(listReturn);
      }
    })

  }
}

module.exports = new BuscaTodosAssuntos