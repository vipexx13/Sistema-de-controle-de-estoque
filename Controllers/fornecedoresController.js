const fornecedoresModel = require('../Models/fornecedoresModel');

const fornecedoresController = {
    listarTodos: (req, res) => {
        fornecedoresModel.listarTodos((err, result) => {
            if(err)
                return res.status(500).json({ erro: "Erro ao buscar fornecedores"});
            res.json(result);
      });
    },

    criarFornecedor: (req, res) => {
        fornecedoresModel.criarFornecedor(req.body, (err, result) => {
            if (err) return res.status(500).json({erro: "Erro ao criar fornecedor"});
            res.json({mensagem:"Fornecedor cadastrado", id: result.insertId});
        });
        },

    atualizarFornecedor: (req, res) => {
        const id = req.params.id;
        fornecedoresModel.atualizarFornecedor(id, req.body, (err, result) =>{
            if(err) return res.status(500).json({error: "Erro ao atualizar fornecedor"});
            res.json({mensagem: "Fornecedor atualizado com sucesso"});
        });
    },

    deletarFornecedor: (req, res) => {
        fornecedoresModel.deletarFornecedor(req.params.id, (err)=> {
            if(err) return res.status(500).json({erro:"Erro ao deletar fornecedor"});
            res.json({mensagem: "Fornecedor deletado com sucesso"});
        });
    }
};


module.exports = fornecedoresController;