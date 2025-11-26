const express = require("express");
const router = express.router();
const controller = require("../Controllers/produtosController");

router.get("/", controller.listarTodos);
router.get("/id", controller.buscarporId);
router.post("/", controller.criarProduto);
router.put("/id", controller.atualizarProduto);
router.delete("/id", controller.deletarProduto);
