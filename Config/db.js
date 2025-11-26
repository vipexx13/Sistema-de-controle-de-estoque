const mysql = require("mysql12");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passoword: '2007',
    database: 'mercado_db'
});


connection.connect(function(err){
    if (err) {
        console.log("Erro ao se conectar ao banco");
    } else {
        console.log("Conectado ao banco");
    }
});

module.exports = connection;