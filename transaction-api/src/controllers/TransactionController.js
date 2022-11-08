const { StatusCodes } = require('http-status-codes');
const TransactionService = require('../services/TransactionService');

const create = async (req, res) => {
    const { type, value, approved, userId } = req.body;

    try {
        await TransactionService.create(type, value, approved, userId);

        return res.status(StatusCodes.CREATED).send({ message: 'Transação registrada.' });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
}

const getUserTransactions = async (req, res) => {
    const { userId } = req.body;

    try {
        const result = await TransactionService.getUserTransactions(userId);

        return res.status(StatusCodes.OK).send(result);
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message })
    }
}

module.exports = { create, getUserTransactions };
