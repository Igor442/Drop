import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getAllProducts = () => {
    return axios.get(API_URL);
};

const addProduct = (productData) => {
    return axios.post(API_URL, productData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export default { getAllProducts, addProduct, deleteProduct };
