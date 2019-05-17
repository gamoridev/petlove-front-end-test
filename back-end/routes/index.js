const express = require('express');
const path = require('path');

const router = express.Router();

// index route
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/build', 'index.html'));
});

// 404 route
router.get('*', function(req, res){
    res.status(404).send({
        message: "Recurso não encontrado"
    });
});

module.exports = router;