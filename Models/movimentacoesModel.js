const connection = require('../Config/db');

const movimentacoesModel = {
    registar(dados, callback){
        const sql = "INSERT INTO movimentacoes (id_produto, tipo, quantidade) VALUES(?, ?, ?)"
        db.query(sql, [dados.id_produto, dados.tipo, dados.quantidade],callback);
    },


    listarTodos: (useCallback) => {
    db.query('SELECT * FROM movimentacoes ORDER BY data_movimentacao DESC', callback);
    }
};

module.exports = movimentacoesModel;

