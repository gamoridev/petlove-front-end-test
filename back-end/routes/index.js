const express = require('express');
const router = express.Router();

// index route
router.get('/', function (req, res) {
    res.status(200).send({
        title: "API em Express Node para ViaCep",
        version: "0.0.1"
    });
});

// 404 route
router.get('*', function(req, res){
    res.status(404).send({
        message: "Recurso não encontrado"
    });
});

module.exports = router;