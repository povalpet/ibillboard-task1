
module.exports = function(){
  function RedisService(connector) {
    this.connector = connector;
    this.client = this.createClient();
  }

  RedisService.prototype.createClient = function(port,host,options) {
    var client;
    if (port === null) {
      port = 6379;
    }
    if (host === null) {
      host = '127.0.0.1';
    }
    client = this.connector.createClient(port, host, options);
    return client;
  };

  /**
   * Send INCRBY command to redis, for more see http://redis.io/commands/incrby
   * @param  {Array}   value to be incemented
   */
  RedisService.prototype.increment = function(value, callback) {
    this.client.send_command('INCRBY',value,callback);
  };

  return RedisService;

}();
