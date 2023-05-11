const express = require('express');

const productController = require('../../controllers/api/productsController');


const router = express.Router();

router.get('/', productController.list);
router.get('/:id',productController.getByID);

module.exports = router;