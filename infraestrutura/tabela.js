const conexao = require("./conexao");

class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.createAtendimento()
    }

    createAtendimento(){
        const sql = "CREATE TABLE IF NOT EXISTS saladeaula (id SERIAL PRIMARY KEY, codigo_pergunta text, descricao_tratada text, resposta_publica text, unidade_gestora text, assunto varchar(100),assunto_correcao boolean, assunto_sugerido varchar, palavra_chave1 varchar(100), palavra_chave2 varchar(100), palavra_chave3 varchar(100), palavra_chave4 varchar(100),palavra_chave5 varchar(100), resposta_similar1 text, resposta_similar2 text, resposta_similar3 text, resposta_similar4 text, resposta_similar5 text)"
        

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
            } else {
                console.log('tabela atendimento criada com sucesso')
            }
        })

    }
}

module.exports = new Tabelas