const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct, deleteProduct } = require('../controllers/productController'); // Verifique se o caminho está correto

router.get('/', getAllProducts); // getAllProducts deve ser uma função definida
router.post('/', addProduct); // addProduct deve ser uma função definida
router.delete('/:id', deleteProduct); // deleteProduct deve ser uma função definida

module.exports = router;
