const express = require('express'); // importa o pacote express.js para uso na aplicação
const api = require('./Routes/api') // importa o arquivo de rota criado para a API, necessitando especificação do diretório.

const app = express(); // declara a utilização do express

app.use('/home', api); // declara a utilização do middleware api que foi criado.
app.listen(4000, () => {   // declara a porta que será utilizada para as requisições
  console.log("Hello world!") // Imprime Hello World no terminal, assim que a conexão for estabelecida.
})