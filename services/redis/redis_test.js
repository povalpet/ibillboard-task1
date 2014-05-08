var RedisService;
RedisService = require('./redis');

describe('Unit - RedisService',function(){
  var instance, redisMock;

  beforeEach(function(){
    redisMock = {};
    redisMock.createClient = function() {
      redisClientMock = {};
      redisClientMock.send_command = spy();

      return redisClientMock;
    };
    spy(redisMock,'createClient');
  });

  beforeEach(function(){
    instance = new RedisService(redisMock);
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,RedisService);
  });

  it('should create redis client', function() {
    assert.isObject(instance.client);
  });

  describe('method createClient', function(){
    it('should be a function',function(){
      assert.isFunction(instance.createClient);
    });
    it('should call createClient', function() {
      assert.isTrue(redisMock.createClient.called);
    });
  });

  describe('method increment', function(){
    var callback, value;
    beforeEach(function(){
      value = ['count',10];
      callback = function(){};
      instance.increment(value,callback);
    });
    it('should be a function', function(){
      assert.isFunction(instance.increment);
    });
    it('should call redis client', function(){
      assert.isTrue(instance.client.send_command.called);
    });
    it('should call redis with proper arguments', function(){
      assert.isTrue(instance.client.send_command.calledWith('INCRBY',value,callback));
    });
  });
});
