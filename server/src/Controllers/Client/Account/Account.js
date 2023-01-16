const asyncHandler = require('express-async-handler');
const  Account = require('../../../Models/Client/Account');
const Client = require('../../../Models/Client/Client');


const CreateAccount = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.client_id);
    const { solde } = req.body;
    if (!client || !solde) {
        res.status(400);
        throw new Error('Something is wrong');
    }
    const account = await Account.create({
        client: client._id,
        solde
    });
    if (account) {
        res.status(200).json({ message: 'Your account has been created successfully' });
    } else res.status(400).json({ message: 'Something is wrong :(' });
});

const DeleteAccount = asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.account_id);
    if (account) {
        account.remove();
        res.status(200).json({
            message: 'Account deleted successfully'
        });
    } else {
        res.status(400);
        throw new Error('Something wrong!!');
    }
});

const GetAccount = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.client_id);
    const account = await Account.findOne({ client:client._id });
    if (client) {
        account
            ? res.status(200).json(account)
            : res.status(400).json({
                  message: "You don't have an account yet"
              });
    } else res.status(400).json({ message: 'Client not exist' });
});
module.exports = {
    CreateAccount,
    DeleteAccount,
    GetAccount
};
