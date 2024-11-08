import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Preço: R${(product.price / 100).toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ProductCard;
