const conexao = require("./conexao");

class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.createAtendimento()
    }

    createAtendimento(){
        const sql = "CREATE TABLE IF NOT EXISTS orientacao2 (id SERIAL PRIMARY KEY, codigo_pergunta text, descricao_tratada text, resposta_publica text, unidade_gestora text, assunto text)"
        

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