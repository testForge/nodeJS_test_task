var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var morgan = require('morgan')

var logDirectory = __dirname + '../../log'

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/reqlog-%DATE%.log',
    frequency: 'daily',
    verbose: false
});

module.exports = morgan('combined', {stream: accessLogStream});