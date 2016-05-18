define('pp', ['polyglot', 'json!data/locales.json'], function(Polyglot, locales){
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}

	return new Polyglot({locale: "ru", phrases: locales[getCookie("Lang") || "en"]});
});