const connection = require('../Config/db');

const produtosModel = {
    listarTodos(callback) {
        db.query("SELECT * FROM produtos", callback);
    },



buscarPorId(id, callback){
    db.query("SELECT * FROM produtos WHERE ID = ?", [id], callback);
},


criarProduto(dados, callback){
    const sql = "INSERT INTO produtos (nome, descricao, quantidade, id_fornecedor) VALUES (?, ?, ?, ?)"
    db.query(sql, [dados.nome, dados.descricao, dados.quantidade, dados.id_fornecedor], callback);
},


atualizarProduto(id, dados, callback){
    const sql = "UPDATE produtos SET nome = ?, descricao = ?, quantidade = ?, id_fornecedor = ? WHERE ID = ?";
    db.query(sql, [dados.nome, dados.descricao, dados.quantidade, dados.id_fornecedor], callback);
},


deletarProduto(id, callback){
    db.query("DELETE FROM produtos WHERE ID = ?", [id], callback);
}
};

module.exports = produtosModel;