var winston = require('winston');
var path    = require('path');


var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.DailyRotateFile({ 
        name: 'file',
        filename: path.join(__dirname , '/../logs/debug.log'),
        datePattern: '.yyyy-MM-ddTHH',
        json: false
    })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.DailyRotateFile({
        name: 'errors-file',
        filename: __dirname + '/../logs/exceptions.log',
        datePattern: '.yyyy-MM-ddTHH',
        json: false
    })
  ],
  exitOnError: false
});

module.exports = logger;
