const API_URL = 'http://localhost:5000/api';

// Função para buscar produtos
async function fetchProducts() {
    const response = await fetch(`${API_URL}/products`);
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$${(product.price / 100).toFixed(2)}</p>
            <button onclick="addToCart('${product._id}')">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Função para adicionar produtos ao carrinho
async function addToCart(productId) {
    const response = await fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ productId })
    });
    const result = await response.json();
    document.getElementById('cart-count').innerText = result.cartCount;
}

fetchProducts();
