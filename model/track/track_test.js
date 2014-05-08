var TrackModel;
TrackModel = require('./track');

describe('Unit - TrackModel', function(){
  var instance;

  beforeEach(function(){
    instance = new TrackModel();
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,TrackModel);
  });

  describe('method save', function(){
    it('should be a function', function(){
      assert.isFunction(instance.save);
    });
  });
});
