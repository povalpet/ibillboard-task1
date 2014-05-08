var RedisModel;
RedisModel = require('./redis');

describe('Unit - RedisModel', function(){
  var instance;

  beforeEach(function(){
    instance = new RedisModel();
  });
  it('should be initialized', function(){
    assert.instanceOf(instance,RedisModel);
  });
});
