const asyncHandler = require('express-async-handler');
const Client = require('../../../Models/Client/Client');
const Account = require('../../../Models/Client/Account');
const Transaction = require('../../../Models/Client/Transaction');

const Transfer = asyncHandler(async (req, res) => {
    const date_now = new Date().toLocaleDateString('sv');
    const fromAccount = await Account.findById(req.params.fromAccount);
    const { toAccount, montant, desc } = req.body;
    const checkAccount = await Account.findById(toAccount);
    if (!fromAccount || montant > fromAccount.solde || !checkAccount || fromAccount.solde===0 || !(await Client.findById(fromAccount.client)) || !montant || !desc)
        res.status(400).json({
            message: 'Your balance account is empty :('
        });
    else {
        if (checkAccount && fromAccount && desc && montant) {
            const newTransfer = await Transaction.create({
                transaction_date: date_now,
                montant,
                desc,
                client: fromAccount.client,
                fromAccount: fromAccount._id,
                toAccount
            });
            if (newTransfer) {
                const updateOriginAccount = await Account.findByIdAndUpdate(fromAccount._id, {
                    solde: fromAccount.solde - parseInt(montant)
                });
                const updateRecevedAccount = await Account.findByIdAndUpdate(checkAccount._id, {
                    solde: checkAccount.solde + parseInt(montant)
                });
                if (updateOriginAccount && updateRecevedAccount) {
                    res.status(200).json({
                        message: 'Successfully transaction'
                    });
                }
            }
        } else {
            res.status(200).json({
                message: 'Something wrong'
            });
        }
    }
});
const DeleteTransactionsByClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.client_id);
    const deleted = await Transaction.deleteMany({ client: client._id });
    deleted
        ? res.status(200).json({
              message: 'Transactions deleted successfully'
          })
        : res.status(300).json({
              message: 'Somthing wrong :('
          });
});
const GetTransations = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.client_id);
    const transactions = await Transaction.find({ client });
    transactions.length
        ? res.status(200).json(transactions)
        : res.status(400).json({
              message: "You don't have any transaction yet"
          });
});
module.exports = {
    Transfer,
    GetTransations,
    DeleteTransactionsByClient
};
