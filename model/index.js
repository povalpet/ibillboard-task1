var track;

TrackModel = require('./track');
RedisModel = require('./redis');

module.exports = function(services){
  track = new TrackModel();
  redis = new RedisModel();

  return {
    track:track,
    redis:redis
  };
};
