const Transaction = require('../database/models/Transaction');

const create = async (type, value, approved, userId) => {
    const newTransaction = {
        type,
        value,
        approved,
        date: new Date(),
        userId
    }

    await Transaction.create(newTransaction);
}

const getUserTransactions = async (userId) => {
    const transactions = await Transaction.find({ userId })
        .select('-__v');

    return transactions;
}

module.exports = { create, getUserTransactions };
