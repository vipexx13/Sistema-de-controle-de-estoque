const app = require("./SRC/app");

const port = 3000;

app.listen(port, () => {
    console.log('Rodando em http://localhost:${port}');
});