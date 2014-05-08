var express,http,servicesFactory,routes,modelFactory;

express = require('express');
http = require('http');
servicesFactory = require('./services');
routes = require('./routes');
modelFactory = require('./model');

var app,services,model;

services = servicesFactory.create();
model = modelFactory(services);

global.logger = services.logger;

app = express();
app.set('mode', process.env.NODE_ENV || 'development');

app.set('port',3000);

routes.register(app,model);

var server,onServerError;

onServerError = function(err) {
  if ('EADDRINUSE' === err.errno) {
    return typeof logger !== "undefined" && logger !== null ? logger.error("Port " + (app.get('port')) + " is already in use! Start aborted.") : void 0;
  } else {
    if (typeof logger !== "undefined" && logger !== null) {
      logger.error('LAUNCH ERROR');
    }
    return typeof logger !== "undefined" && logger !== null ? logger.error(err) : void 0;
  }
};

server = http.createServer(app);

server.on('error',onServerError);

server.listen(process.env.PORT || app.get('port'), function() {
  return typeof logger !== "undefined" && logger !== null ? logger.info("Express server listening on port " + app.get('port')) : void 0;
});
