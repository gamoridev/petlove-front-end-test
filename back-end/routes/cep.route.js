const express = require('express');
const router = express.Router();

const controller = require('../controllers/cep.controller')

router.get('/:cep', controller.getCep);

module.exports = router;