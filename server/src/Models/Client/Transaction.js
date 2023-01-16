const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema(
    {
        montant: {
            type: Number,
            required: true
        },
        transaction_date: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        client:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Client"
        },
        fromAccount: {
            type: String,
            required: true,
        },
        toAccount: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Transaction', transactionSchema);
