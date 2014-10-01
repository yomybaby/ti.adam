define(["Ti/_/lang"], function(lang) {

	return lang.setObject("adam", {
		example: function() {
			return "hello world";
		},

		properties: {
			exampleProp: "hello world"
		}
	});

});