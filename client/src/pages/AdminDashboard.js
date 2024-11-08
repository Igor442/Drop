import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await ProductService.getAllProducts();
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        await ProductService.addProduct(newProduct);
        const response = await ProductService.getAllProducts();
        setProducts(response.data);
        setNewProduct({ name: '', price: '' }); // Limpar os campos
    };

    const handleDeleteProduct = async (id) => {
        await ProductService.deleteProduct(id);
        const response = await ProductService.getAllProducts();
        setProducts(response.data);
    };

    return (
        <div>
            <h1>Painel de Administração</h1>
            <h2>Adicionar Produto</h2>
            <input 
                type="text" 
                placeholder="Nome" 
                value={newProduct.name} 
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
            />
            <input 
                type="number" 
                placeholder="Preço" 
                value={newProduct.price} 
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
            />
            <button onClick={handleAddProduct}>Adicionar</button>

            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - R${(product.price / 100).toFixed(2)}
                        <button onClick={() => handleDeleteProduct(product._id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
