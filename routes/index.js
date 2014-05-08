var TrackRoute;

TrackRoute = require('./track');

var create;

/**
 * Initialize route handlers
 * @param  {Object} model
 * @return {Object} created route handlers
 */
create = function(model) {
  var track = new TrackRoute(model.redis,model.track);
  return {
    track:track
  };
};

var registerRoutes;
/**
 * Registering app routes
 * @param  {Object} app    express instance
 * @param  {Object} routes route handlers
 */
registerRoutes = function(app, routes) {
  app.get('/track',routes.track.handleGet);
};

exports.register = function(app,model) {
  var routes = create(model);
  registerRoutes(app, routes);
};
