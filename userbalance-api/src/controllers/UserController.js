const { StatusCodes } = require('http-status-codes');
const { setCache, getCache } = require('../cache/cacheConfig');
const { setRedis, getRedis } = require('../cache/redisConfig');
const UserService = require('../services/UserService');

const create = async (req, res) => {
    const { name } = req.body;

    try {
        await UserService.create(name);

        return res.status(StatusCodes.CREATED).send({ message: 'Usuário criado com sucesso.' });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message })
    }
}

const getUserBalance = async (req, res) => {
    const { id } = req.params;

    const balanceCache = await getCache(`user-${id}-balance`);
    const balanceRedis = await getRedis(`user-${id}-balance`);

    if (!balanceCache) {
        if (!balanceRedis) {
            try {
                const result = await UserService.getUserBalance(id);

                await setCache(`user-${id}-balance`, result.balance);
                await setRedis(`user-${id}-balance`, result.balance);

                return res.status(StatusCodes.OK).send(result)
            } catch (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message })
            }
        }
        return res.status(StatusCodes.OK).send({ 'balance': parseFloat(balanceRedis) })
    }
    return res.status(StatusCodes.OK).send({ 'balance': parseFloat(balanceCache) })
}

module.exports = { create, getUserBalance };
