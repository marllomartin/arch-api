const User = require('../database/models/User');

const create = async (name) => {
    const newUser = {
        name,
        balance: 0
    }

    await User.create(newUser);
}

const getUserBalance = async (id) => {
    const balance = await User
        .findById(id, { name: 0, _id: 0 })
        .select('-__v');

    return balance
}

module.exports = { create, getUserBalance };
