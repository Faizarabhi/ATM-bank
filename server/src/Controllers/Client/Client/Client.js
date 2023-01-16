const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const Client = require('../../../Models/Client/Client');
const generateToken = require('../../../Utils/generateToken');


const Register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const clientExists = await Client.findOne({ email });
    if (clientExists) {
        res.status(400);
        throw new Error('Client already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const client = await Client.create({
        username,
        email,
        password: hashedPassword
    });
    if (client) {
        res.status(201).json({
            _id: client.id,
            username: client.username,
            token: generateToken(client.id),
            message: 'Account created succefully'
        });
    } else {
        res.status(400).json({
            message: 'Invalid user data'
        });
    }
});

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });

    if (client && (await bcrypt.compare(password, client.password))) {
        res.json({
            _id: client.id,
            username: client.username,
            token: generateToken(client.id),
            message: 'User loged successfully'
        });
    } else {
        res.status(400).json({
            message: 'Invalid user data'
        });
    }
});

const GetAllClients = asyncHandler(async (req, res) => {
    const clients = await Transaction.find();
    clients
        ? res.status(200).json(clients)
        : res.status(400).json({
              message: 'There is no client yet'
          });
});

module.exports = {
    Register,
    Login,
    GetAllClients
};
