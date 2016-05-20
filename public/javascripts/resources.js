define(['polyglot', 'json!data/locales/ru.json', 'json!data/locales/en.json'], function(Polyglot, ru, en){
	var locales = {};
	locales.en = en;
	locales.ru = ru;
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}

	let resources = new Polyglot({locale: "ru", phrases: locales[getCookie("Lang") || "ru"]});
	console.log(`App resources:`);
	console.log(resources);
	return resources;
});