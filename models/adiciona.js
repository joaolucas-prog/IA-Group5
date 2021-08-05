const conexao = require('../infraestrutura/conexao')


class Adiciona {
    adiciona(atendimento, res) {

        const sql = `INSERT INTO saladeaula (codigo_pergunta, descricao_tratada, resposta_publica, unidade_gestora, assunto,assuntocorrecao, assunto_sugerido, palavachave1, palavachave2, palavachave3, palavachave4,palavachave5, respostasimi1, respostasimi2, respostasimi3, respostasimi4, respostasimi5) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`
        const {codigo_pergunta, descricao_tratada, resposta_publica, unidade_gestora, assunto, assuntocorrecao, assunto_sugerido, palavachave1, palavachave2, palavachave3, palavachave4,palavachave5, respostasimi1, respostasimi2, respostasimi3, respostasimi4, respostasimi5} = atendimento
                   
        conexao.query(sql,[codigo_pergunta, descricao_tratada, resposta_publica, unidade_gestora, assunto,assuntocorrecao, assunto_sugerido, palavachave1, palavachave2, palavachave3, palavachave4,palavachave5, respostasimi1, respostasimi2, respostasimi3, respostasimi4, respostasimi5], (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento.valores)
            }
        } )

    }
}

module.exports = new Adiciona
