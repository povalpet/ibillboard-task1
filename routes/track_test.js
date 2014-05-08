var TrackRoute,request,express,app;
request = require('supertest');
express = require('express');
TrackRoute = require('./track');

describe('Unit - TrackRoute',function(){
  var instance, redisMock, modelMock;

  beforeEach(function(){
    redisMock = {
      save: spy()
    };
    modelMock = {
      save: function(values,callback) {
        callback(null,true);
      }
    };
    spy(modelMock,'save');
  });

  beforeEach(function(){
    app = express();
    instance = new TrackRoute(redisMock,modelMock);
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,TrackRoute);
  });

  describe('method handleGet', function(){
    beforeEach(function(){
      app.get('/track',instance.handleGet);
    });
    it('should be a function', function(){
      assert.isFunction(instance.handleGet);
    });
    it('should respond with json', function(done){
      request(app)
        .get('/track')
        .expect('Content-Type', /json/)
        .expect(200,done);
    });
    it('should return query parameters', function(done){
      request(app)
        .get('/track?count=2&foo=bar')
        .expect({count:2,foo:'bar'},done);
    });
    it('should call redis.save method when count query defined',function(){
      request(app)
        .get('/track?count=2')
        .end(function(){
          assert.isTrue(redisMock.save.called);
        });
    });
    it('should not call redis.save method when count query not defined',function(){
      request(app)
        .get('/track')
        .end(function(){
          assert.isFalse(redisMock.save.called);
        });
    });
    it('should call redis.save method with proper data',function(){
      request(app)
        .get('/track?count=2')
        .end(function(){
          assert.isTrue(redisMock.save.calledWith(2));
        });
    });

    it('should model.save method', function(){
      request(app)
        .get('/track?count=2')
        .end(function(){
          assert.isTrue(modelMock.save.called);
        });
    });
    it('should model.save method with query values', function(){
      request(app)
        .get('/track?count=2&foo=bar')
        .end(function(){
          assert.isTrue(modelMock.save.calledWith({count:'2',foo:'bar'}));
        });
    });
  });
});
