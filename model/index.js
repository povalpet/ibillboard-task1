var track,fs;

fs = require('fs');
TrackModel = require('./track');
RedisModel = require('./redis');

module.exports = function(services){
  track = new TrackModel(fs);
  redis = new RedisModel(services.redis);

  return {
    track:track,
    redis:redis
  };
};
