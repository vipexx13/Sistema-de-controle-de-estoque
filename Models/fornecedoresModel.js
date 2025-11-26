const db = require("../Config/db");

const fornecedoresModel = {
    listarTodos(callback){
        db.query("SELECT * FROM fornecedores", callback);
    },

criarFornecedor(dados, callback){
    const sql = "INSERT INTO fornecedores(nome, telefone, email) VALUES(?, ?, ?)";
    db.query(sql, [dados.nome, dados.telefone, dados.email], callback);
},

atualizarFornecedor(id, dados, callback){
    const sql = "UPDATE fornecedores SET nome = ?, telefone = ?, email = ? WHERE ID = ?";
    db.query(sql, [dados.nome, dados.telefone, dados.email], callback);
},

deletarFornecedor(id, callback){
    db.query("DELETE FROM fornecedores WHERE ID = ?", [id], callback);
}
};


module.exports = fornecedoresModel;
