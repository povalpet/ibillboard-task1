var winston;

winston = require('winston');

module.exports = function() {
  var transports;
  transports = [
    new winston.transports.Console({
      timestamp: true
    })
  ];
  return new winston.Logger({
    transports: transports
  });
};
