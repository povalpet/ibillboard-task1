var Logger, redisNode, RedisService;
Logger = require('./logger');
redisNode = require('redis');
RedisService = require('./redis');

exports.create = function(config) {
  var logger,redis;
  logger = new Logger();
  redis = new RedisService(redisNode);
  return {
    logger:logger,
    redis:redis
  };
};
