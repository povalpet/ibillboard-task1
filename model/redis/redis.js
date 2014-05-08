var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = function(){
  function RedisModel(redis) {
    this.redis = redis;
    this.save = __bind(this.save,this);
  }

  /**
   * Save value to redis, using provided service
   * @param  {int}   value    value, by which will be stored data incremented by
   * @param  {Function} callback
   */
  RedisModel.prototype.save = function(value,callback) {
    this.redis.increment(['count',value],callback);
  };

  return RedisModel;
}();
