TrackRoute = require('./track');
describe('Unit - TrackRoute',function(){
  var instance;

  beforeEach(function(){
    instance = new TrackRoute();
  });

  it('should be initialized', function(){
    assert.instanceOf(instance,TrackRoute);
  });
});
