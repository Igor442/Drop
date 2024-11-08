import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem('token', response.data.token);
};

const signup = async (userData) => {
    await axios.post(`${API_URL}/signup`, userData);
};

export default { login, signup };
