define([
	'jquery',
	'underscore',
	'backbone',
	'fileupload',
	'collections/players',
	'text!templates/player/playerEdit.html'
], function($, _, Backbone, fileupload, PlayersCollection, playerEditTemplate){
	var PlayerEditView = Backbone.View.extend({
		el: $("#content"),
		initialize: function(params){
			var that = this;
			that.id = params.id;
			that.collection = new PlayersCollection();

			$.ajax({
				url: that.collection.getGetURL,
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				data: {},
				async: true
			}).done(function(data){
					var compiledTemplate;

					that.collection.add(data);
					that.collection.sortByField('lastName');

					compiledTemplate = _.template( playerEditTemplate, {
						player: that.collection.where({id: parseInt(that.id)})[0]
					});
					that.$el.html( compiledTemplate );
				});

		}
	});
	return PlayerEditView;
});