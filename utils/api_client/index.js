const uriParser = require('uri-template');

//populate route path with parameters
module.exports.buildUri = function(template, parameters){
    return uriParser.parse(template).expand(parameters);
};
