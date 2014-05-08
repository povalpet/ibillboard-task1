var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
module.exports = function(){
  function RedisService(connector) {
    this.connector = connector;
    this.client = this.createClient();
    this.increment = __bind(this.increment,this);
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

  RedisService.prototype.increment = function(value, callback) {
    this.client.send_command('INCRBY',value,callback);
  };

  return RedisService;

}();
