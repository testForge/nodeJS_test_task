require.config({
	paths:{
		"json": "lib/json",
		"text": "lib/text",
		"angular": "lib/angular",
		"polyglot": "lib/polyglot"
	},
	baseUrl:"./javascripts"
});

require([
	'angular',
	'app'
], function(){
	angular.bootstrap(document, ['app']);
});