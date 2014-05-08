var TrackRoute;

TrackRoute = require('./track');

var create;

create = function() {
  var track = new TrackRoute();
  return {
    track:track
  };
};

var registerRoutes;
registerRoutes = function(app, routes) {
  app.get('/track',routes.track.handleGet);
};

exports.register = function(app) {
  var routes = create();
  registerRoutes(app, routes);
};
