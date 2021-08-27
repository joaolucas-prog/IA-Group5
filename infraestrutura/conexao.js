const Pool = require('pg').Pool
const conexao = new Pool({
    host:'localhost',
    user: 'postgres',
    database: 'orientacao',
    password: 'Admin123',
    port: 5432 
})

module.exports = conexao