let winston = require('winston@2.4.0');
let moment = require('moment');

winston.level = 'silly';
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {colorize: true, timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss.SSS')});

module.exports = winston;