var Logger;
Logger = require('./logger');

exports.create = function(config) {
  var logger;
  logger = new Logger();

  return {
    logger:logger
  };
};
