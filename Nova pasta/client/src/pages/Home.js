import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await ProductService.getAllProducts();
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Produtos Disponíveis</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
