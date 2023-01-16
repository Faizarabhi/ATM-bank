const express = require('express');
const { CreateAccount, DeleteAccount, GetAccount } = require('../../Controllers/Client/Account/Account');
const { protectClient } = require('../../Middleware/Pretect');
const router = express.Router();
router.post('/:client_id',protectClient, CreateAccount).delete('/:account_id',protectClient, DeleteAccount).get('/:client_id',protectClient, GetAccount);
module.exports = router;
