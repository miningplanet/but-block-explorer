var bluebird = require("bluebird")
var redis = bluebird.promisifyAll(require("redis"))
var config = require("./config.js")
var utils = require("./utils.js")
var redisClient = null;

if (config.redisUrl) {
	redisClient = bluebird.promisifyAll(redis.createClient({url:config.redisUrl}));
	//(async () => {
		redisClient.on('error', err => { console.log('Error ' + err) })
		console.debug('Connect to redis butkoin ' + redisClient.options.url)
		redisClient.connect()
		console.debug('Connected to redis butkoin ' + redisClient.options.url)
	//})();
}

function onCacheEvent(cacheType, hitOrMiss, cacheKey) {
	//console.log(`cache.${cacheType}.${hitOrMiss}: ${cacheKey}`);
}

var redisCache = {
	get:async function(key) {
		return await new Promise(function(resolve, reject) {
			redisClient.get(key).then(function(result) {
				if (result == null) {
					onCacheEvent("redis", "miss", key);

					resolve(null);

					return;
				}

				onCacheEvent("redis", "hit", key);

				resolve(JSON.parse(result));

			}).catch(function(err) {
				utils.logError("ERROR in redis-cli:", err);

				reject(err);
			});
		});
	},
	set:function(key, obj, maxAgeMillis) {
		redisClient.set(key, JSON.stringify(obj));
	}
};

module.exports = {
	active: (redisClient != null),
	get: redisCache.get,
	set: redisCache.set
}