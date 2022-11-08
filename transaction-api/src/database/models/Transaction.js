const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction', {
    type: String,
    value: Number,
    approved: Boolean,
    date: Date,
    userId: String,
})

module.exports = Transaction;
