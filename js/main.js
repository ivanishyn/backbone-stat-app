define([], function() {
	// Shortcut aliases
	require.config({
		baseUrl: '/git/tennismath.web/js/',
		//baseUrl: '/js',
		paths: {
			jquery: 'libs/jquery/jquery-1.9.1.min',
			underscore: 'libs/underscore/underscore',
			backbone: 'libs/backbone/backbone',
			bootstrap: 'libs/bootstrap/bootstrap',
			fileupload: 'libs/bootstrap/bootstrap-fileupload.min',
			text: 'libs/require/text',
			templates: '../templates'
		},
		shim: {
			backbone: {
				deps: ["underscore", "jquery"],
				exports: "Backbone"
			},
			underscore: {
				exports: "_"
			}
		},
		enforceDefine: true
	});

	require([
		// Load our app module and pass it to our definition function
		'app'
	], function(App){
		// The "app" dependency is passed in as "App"
		App.initialize();
	});
});