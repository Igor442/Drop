const Cart = require('../models/Cart');

const getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    res.json(cart);
};

const addToCart = async (req, res) => {
    const { productId } = req.body;
    // Lógica para adicionar o produto ao carrinho
};

module.exports = { getCart, addToCart };
