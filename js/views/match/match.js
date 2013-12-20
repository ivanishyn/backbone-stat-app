define([
	'jquery',
	'underscore',
	'backbone',
	'collections/matches',
	'collections/players',
	'text!templates/match/match.html'
], function($, _, Backbone, MatchesCollection, PlayersCollection, matchTemplate){
	var MatchView = Backbone.View.extend({
		el: $("#content"),
		initialize: function(params){
			var that = this;
			that.id = params.id;
			that.collection = new MatchesCollection();

			$.ajax({
				url: that.collection.getGetURL,
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				data: {},
				async: true
			}).done(function(data){
					var players = new PlayersCollection();

					that.collection.add(data);

					$.ajax({
						url: players.getGetURL,
						type: "GET",
						dataType: "json",
						contentType: "application/json",
						data: {},
						async: true
					}).done(function(data){
							var compiledTemplate;

							players.add(data);
							players.sortByField('lastName');

							compiledTemplate = _.template( matchTemplate, {
								match: that.collection.where({id: parseInt(that.id)})[0],
								players: players
							});

							that.$el.html( compiledTemplate );
						});
				});
		}
	});
	return MatchView;
});