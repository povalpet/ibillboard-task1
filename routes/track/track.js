var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = function(){
  function TrackRoute(redis,trackModel) {
    this.redis = redis;
    this.trackModel = trackModel;
    this.handleGet = __bind(this.handleGet, this);
  }

  /**
   * Route middleware for handling GET /track requests
   * @param  {Object}   req  request object
   * @param  {Object}   res  response object
   * @param  {Function} next
   */
  TrackRoute.prototype.handleGet = function(req,res,next) {
    if(req.query.count) {
      this.redis.save(parseInt(req.query.count,10),function(err){
        if(err) {
          console.log(err);
        }
      });
    }
    this.trackModel.save(__dirname+'/../../data/trackData.js',req.query, function(err){
      if(err) {
        return next(err);
      }

      res.send(req.query);
    });
  };
  return TrackRoute;
}();
