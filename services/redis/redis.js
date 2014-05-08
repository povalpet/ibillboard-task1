module.exports = function(){
  function RedisService(connector) {
    this.connector = connector;
  }

  return RedisService;

}();
