var i18n = require('i18n');

i18n.configure({
	locales:['en','ru'],
	cookie: "Lang",
	directory: __dirname + '/../locales'
});

function middleware(req, res, next){
	res.locals.__= function(){
		return function(text, render){
			return i18n.__.apply(req, arguments);
		}
	};
	next();
};

module.exports = {
	init: i18n.init,
	middleware: middleware

}