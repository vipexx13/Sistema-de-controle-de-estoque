const express = require("express");
const router = express.Router();
const controller = require("../Controllers/fornecedoresController");



router.get("/" , controller.listarTodos);
router.post("/", controller.criarFornecedor);
router.put("/id", controller.atualizarFornecedor);
router.delete("/id",controller.deletarFornecedor);


module.exports = router;