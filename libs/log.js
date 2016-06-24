var winston = require('winston');
var argv = require('optimist').argv;
var ENV = argv.NODE_ENV;

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/');

    return new (winston.Logger)({
       transports : [
           new winston.transports.Console({
               colorize : true,
               level: ENV === 'development' ? 'debug' : 'error',
               label: path
           })
       ]
    });
}

module.exports = getLogger;