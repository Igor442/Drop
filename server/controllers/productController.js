const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send("Produto adicionado com sucesso!");
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.send("Produto removido com sucesso!");
};

module.exports = { getAllProducts, addProduct, deleteProduct }; // Certifique-se de que as funções estão sendo exportadas corretamente
