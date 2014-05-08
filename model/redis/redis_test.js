var RedisModel;
RedisModel = require('./redis');

describe('Unit - RedisModel', function(){
  var instance, redisMock;

  beforeEach(function(){
    redisMock = {};
    redisMock.increment = spy();
  });
  beforeEach(function(){
    instance = new RedisModel(redisMock);
  });
  it('should be initialized', function(){
    assert.instanceOf(instance,RedisModel);
  });

  describe('method save', function(){
    var value,callback;
    beforeEach(function(){
      value = 10;
      callback = function(){};
      instance.save(value,callback);
    });
    it('should be a function', function(){
      assert.isFunction(instance.save);
    });
    it('should call redis.increment method', function(){
      assert.isTrue(redisMock.increment.called);
    });
    it('should call redis.increment method with proper arguments', function(){
      assert.isTrue(redisMock.increment.calledWith(['count',value],callback));
    });
  });
});
