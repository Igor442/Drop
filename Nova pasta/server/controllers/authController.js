const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    console.log("Signup chamado"); // Adicione este log
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    await user.save();
    res.status(201).send("Usuário criado com sucesso!");
};

const login = async (req, res) => {
    console.log("Login chamado"); // Adicione este log
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send("Credenciais inválidas");
    }
};

module.exports = { signup, login }; // Verifique se ambas as funções estão sendo exportadas corretamente
