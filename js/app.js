define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	'text',
    'views/nav/topNav',
	'router',
    'modules/googleAuth/googleAuth'
], function($, _, Backbone, Bootstrap, text, TopNavView, Router, googleAuth){

	var initialize = function(){
        var topNavView = new TopNavView();
        topNavView.render();
		Router.initialize();
	};

	return {
		initialize: initialize
	};
});