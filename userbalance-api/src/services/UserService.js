const Transaction = require('../database/models/Transaction');

const getUserBalance = async (id) => {
  const balance = await Transaction.aggregate([
    { $match: { $and: [{ "userId": id }, { "approved": true }] } },
    { $group: { _id: id, balance: { $sum: "$value" } } }
  ])

  return balance
}

module.exports = { getUserBalance };
