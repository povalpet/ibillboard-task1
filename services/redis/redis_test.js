var RedisService;
RedisService = require('./redis');

describe('Unit - RedisService',function(){
  var instance;

  beforeEach(function(){
    instance = new RedisService();
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,RedisService);
  });
});
