const conexao = require('../infraestrutura/conexao')

class BuscaPorId {
    buscaPorId(id, res) {
        const sql = `SELECT descricao_tratada, resposta_publica, unidade_gestora, assunto_sugerido, assunto FROM saladeaula WHERE codigo_pergunta=$1`;

        conexao.query(sql, [id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                const pergunta = resultados.rows[0]
                res.status(200).json(pergunta);
            }
        });
    };
}

module.exports = new BuscaPorId