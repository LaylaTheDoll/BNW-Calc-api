const express = require('express') // Importa o Express.js
const router = express.Router();// cria uma variavel para uso do método router



router.get('/', (req, res, next) => { //declara um middleware que responde a requisições na URI /
   res.send("Hello World, Again!") // Envia uma mensagem de volta ao requisitor.
})

router.post('/', (req, res, next) => { //declara um middleware que responde a requisições na URI /
   res.send("Hello World, Again!") // Envia uma mensagem de volta ao requisito.
})

router.put('/', (req, res, next) => { //declara um middleware que responde a requisições na URI /
   res.send("Hello World, Again!") // Envia uma mensagem de volta ao requisito.
})

router.delete('/', (req, res, next) => { //declara um middleware que responde a requisições na URI /
   res.send("Hello World, Again!") // Envia uma mensagem de volta ao requisito.
})

module.exports = router; // permite que o método router esteja disponivel para uso em outros arquivos.