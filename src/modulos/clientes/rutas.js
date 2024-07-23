const express = require('express');

const respuesta = require('../../red/respuestas');

const router = express.Router();

router.get('/', function (req, res) {
    //res.send('Clientes OK')
    respuesta.success(req, res, 'Todo OK', 200)
});

module.exports = router;