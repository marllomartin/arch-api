const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    balance: Number
})

module.exports = User;
