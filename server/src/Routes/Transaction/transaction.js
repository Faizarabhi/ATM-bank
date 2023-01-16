const express=require('express');
const { Transfer, GetTransations, DeleteTransactionsByClient } = require('../../Controllers/Client/Transaction/Transaction');
const { protectClient } = require('../../Middleware/Pretect');
const router = express.Router();
router.post('/:fromAccount', protectClient, Transfer).get('/:client_id', protectClient, GetTransations).delete('/:client_id', protectClient, DeleteTransactionsByClient)
module.exports = router