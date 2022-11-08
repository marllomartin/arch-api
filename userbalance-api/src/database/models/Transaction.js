const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction', {
  type: String,
  value: Number,
  approved: Boolean,
  userId: String,
  date: Date,
});

module.exports = Transaction;
