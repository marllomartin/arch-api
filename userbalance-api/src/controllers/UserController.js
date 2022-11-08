const { StatusCodes } = require('http-status-codes');
const { setCache, getCache } = require('../cache/cacheConfig');
const UserService = require('../services/UserService');

const getUserBalance = async (req, res) => {
  const { id } = req.params;

  const balanceCache = await getCache(`user-${id}-balance`);

  if (!balanceCache) {
    try {
      const result = await UserService.getUserBalance(id);

      await setCache(`user-${id}-balance`, result.balance);

      return res.status(StatusCodes.OK).send(result);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
  }

  return res.status(StatusCodes.OK).send({ balance: parseFloat(balanceCache) });
};

module.exports = { getUserBalance };
