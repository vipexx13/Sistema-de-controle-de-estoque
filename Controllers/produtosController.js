const produtosModel = require('../Models/produtosModel');

const prodututosController = {
    listarTodos: (req, res) => {
        fornecedoresModel.listarTodos((err, result) => {
            if(err) return res.status(500).json({erro: "Erro ao listar produtos"});
            res.json(result);
        });
    },


    buscarporId: (req, res) => {
        produtosModel.buscarPorId(req.params.id, (err, result)=> {
            if(err) return res.status(500).json({erro:"Erro ao buscar por id"});
            res.json(result);
        });
    },


    criarProduto: (req, res) => {
        produtosModel.criarProduto(req.body, (err, result) => {
            if (err) return res.status(500).json({erro: "Erro ao criar produto"});
            res.json({mensagem: "Produto criado", id: result.insertId});
    });
},

    atualizarProduto: (req, res) =>{
        produtosModel.atualizarProduto(req.body,(err, result) => {
            if(err) return res.status(500).json({erro:"Erro ao atualizar produto"});
            res.json({mensagem: "Produto atualizado", });
        });
    },

    deletar: (req, res) => {
        produtosModel.deletarProduto(req.params.id, (err, result) => {
            if(err) return res.status(500).json({erro:"Erro ao deletar produto"});
            res.json({mensagem: "Produto deletado"});
        });
    }

};

    module.exports = prodututosController;
