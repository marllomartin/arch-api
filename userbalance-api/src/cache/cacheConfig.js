const NodeCache = require("node-cache");

const cacheClient = new NodeCache()

const getCache = async (value) => {
    const cache = await cacheClient.get(value);

    return cache;
}

const setCache = async (key, value) => {
    const cache = cacheClient.set(key, value);

    return cache;
}

module.exports = { cacheClient, getCache, setCache };
