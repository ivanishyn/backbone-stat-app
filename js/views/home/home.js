define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/home.html'
], function($, _, Backbone, homeTemplate){
	var HomeView = Backbone.View.extend({
		el: $('#content'),
		render: function(){
			var compiledTemplate = _.template( homeTemplate );
			this.$el.html( compiledTemplate );
		}
	});
	return HomeView;
});