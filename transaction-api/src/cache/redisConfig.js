const Redis = require("ioredis");

const redisClient = new Redis();

const getRedis = async (value) => {
    const redisCache = await redisClient.get(value);

    return redisCache;
}

const setRedis = async (key, value) => {
    const redisCache = await redisClient.set(key, value);

    return redisCache;
}

module.exports = { redisClient, getRedis, setRedis };
