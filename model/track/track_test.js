var TrackModel;
TrackModel = require('./track');

describe('Unit - TrackModel', function(){
  var instance,fsMock;

  beforeEach(function(){
    fsMock = {};
    fsMock.appendFile = spy();
  });

  beforeEach(function(){
    instance = new TrackModel(fsMock);
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,TrackModel);
  });

  describe('method save', function(){
    var callback,data;
    beforeEach(function(){
      callback = function(){};
      data = {foo:'bar'};
      instance.save('filepath',data,callback);
    });
    it('should be a function', function(){
      assert.isFunction(instance.save);
    });
    it('should call fs.appendFile method',function(){
      assert.isTrue(fsMock.appendFile.called);
    });
    it('should call fs.appendFile with providet arguments', function(){
      assert.isTrue(fsMock.appendFile.calledWith('filepath',JSON.stringify(data)+'\n',callback));
    });
  });
});
