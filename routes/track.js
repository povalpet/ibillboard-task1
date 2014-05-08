module.exports = function(){

  function TrackRoute() {
    // this.trackModel = trackModel;
  }


  TrackRoute.prototype.handleGet = function(req,res,next) {
    console.log('ASFGH');
    res.end();
  };

  return TrackRoute;
}();
