const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController'); // Verifique se o caminho está correto

router.post('/signup', signup); // signup deve ser uma função definida
router.post('/login', login); // login deve ser uma função definida

module.exports = router;
