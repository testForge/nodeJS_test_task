var path = require('path');
module.exports = require('node-sass-middleware')({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: true,
    sourceMap: true
});