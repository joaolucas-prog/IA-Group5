const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabela')
const port = 4000


conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    } 
    else {
        console.log('conectado')
        Tabelas.init(conexao)
        const app = customExpress();
            
        app.get('/img/logo', function(request, response){
            response.sendFile(__dirname + '/img/logo.png');
        });
        app.get('/style.css', function(request, response){
            response.sendFile(__dirname + '/style.css');
        });
        app.listen(port, () => console.log(`App running on port ${port}.`))
    }
})


