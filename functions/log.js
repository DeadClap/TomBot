const chalk = require('chalk');
const moment = require('moment-timezone');


module.exports = (message, type = 'log') => {
    var format = `[${moment.tz('America/New_York').format('MM|DD|YYYY hh:mm:ss')}]`
    var msg = ' ' + message
    switch (type) {
        case 'log':
        console.log(chalk.black.bgGreen(format) + msg)
        break;
    case 'warn':
        console.log(chalk.black.bgYellow(format) + msg)
        break;
    case 'error':
        console.log(chalk.black.bgRed(format) + msg)
        break;    
    }
}