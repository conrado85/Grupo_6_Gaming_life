const express = require('express');

const ayudaController = require('../controllers/ayudaController');

const router = express.Router();

router.get('../ayuda', ayudaController.index);

module.exports = router;