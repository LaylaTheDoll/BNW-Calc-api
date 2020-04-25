const express = require('express') // Importa o Express.js
const router = express.Router();// cria uma variavel para uso do método router

const simpleBattle = require('./simpleBattle');


router.post('/simulate', (req, res, next) => {
    simpleBattle.simulate(req.body).then((result) => {
        let baseResponse = {
            serviceStatus: 200,
            message: "success",
            result: result
        }
        res.status(200).json(baseResponse);
    }, (err) => {
        let httpCode = 500;
        res.status(httpCode).json({
            serviceStatus: {
                code: SUCCESS_RESPONSE_CODE,
                message: err
            }
        })
    })
 })

 module.exports = router; // permite que o método router esteja disponivel para uso em outros arquivos.
