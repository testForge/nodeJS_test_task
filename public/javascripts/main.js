require.config({
	paths:{
		"json": "lib/json",
		"text": "lib/text",
		"angular": "lib/angular",
		"polyglot": "lib/polyglot",
		"jquery": "lib/jquery"
	},
	baseUrl:"./javascripts"
});

require([
	'angular',
	'app'
], function(){
	angular.bootstrap(document, ['app']);
});