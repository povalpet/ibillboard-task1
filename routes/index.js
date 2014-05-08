var TrackRoute;

TrackRoute = require('./track');

var create;

create = function(model) {
  var track = new TrackRoute(model.redis,model.track);
  return {
    track:track
  };
};

var registerRoutes;
registerRoutes = function(app, routes) {
  app.get('/track',routes.track.handleGet);
};

exports.register = function(app,model) {
  var routes = create(model);
  registerRoutes(app, routes);
};
