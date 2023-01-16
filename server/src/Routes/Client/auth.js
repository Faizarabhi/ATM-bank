const express=require('express');
const { Register, Login, GetAllClients } = require('../../Controllers/Client/Client/Client');
const router = express.Router();
router.post('/register', Register).post('/login',Login).get('/',GetAllClients)
module.exports = router