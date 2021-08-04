const moment = require('moment')
const conexao = require('../infraestrutura/conexao')


class Atendimento {
    adiciona(atendimento, res) {

        const sql = `INSERT INTO orientacao2 (codigo_pergunta,descricao_tratada,resposta_publica,unidade_gestora,assunto) VALUES ($1,$2,$3,$4,$5)`
        const {codigo_pergunta,descricao_tratada,resposta_publica,unidade_gestora,assunto} = atendimento
                   
        conexao.query(sql,[codigo_pergunta,descricao_tratada,resposta_publica,unidade_gestora,assunto], (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento.valores)
            }
        } )


    }
    lista(res){
        const sql = 'SELECT * FROM orientacao2 ORDER BY id'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows[0])
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM orientacao2 WHERE id=$1`

        conexao.query('SELECT * FROM orientacao2 WHERE id = $1', [id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados.rows[0])
            }
        })
    }
    altera(id,valores, res){
       
        const sql = `UPDATE orientacao2 SET codigo_pergunta = $1,descricao_tratada = $2, resposta_publica = $3, unidade_gestora = $4, assunto = $5 WHERE id=$6`

        const {codigo_pergunta,descricao_tratada,resposta_publica,unidade_gestora,assunto} = valores

        conexao.query(sql, [codigo_pergunta,descricao_tratada,resposta_publica,unidade_gestora,assunto,id], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id, res){
        const sql = 'DELETE FROM orientacao2 WHERE id=$1'

        conexao.query(sql, [id], (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento