const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'R#s1Li3ntê',
    database: 'cadastro-participantes',
})

module.exports = conexao