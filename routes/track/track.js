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
      this.redis.save(parseInt(req.query.count,10));
    }

    this.trackModel.save(req.query, function(err,done){
      if(err) {
        return next(err);
      }

      res.send(req.query);
    });
  };
  return TrackRoute;
}();
