const Pool = require('pg').Pool
const conexao = new Pool({
    host:'localhost',
    user: 'postgres',
    database: 'orientacao',
    password: 'admin123',
    port: 5432 
})

module.exports = conexao