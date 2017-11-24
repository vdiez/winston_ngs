let winston = require('winston');
let moment = require('moment');

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
            level: 'silly',
            colorize: true
        })
    ]
});

module.exports = logger;