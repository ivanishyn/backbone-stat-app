define([
	'jquery',
	'underscore',
	'backbone',
	'collections/matches',
	'collections/players',
	'text!templates/matches/matchesList.html'
], function($, _, Backbone, MatchesCollection, PlayersCollection, matchesListTemplate){
	var MatchesListView = Backbone.View.extend({
		el: $("#content"),
		initialize: function(){
			var that = this;
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

							compiledTemplate = _.template( matchesListTemplate, {
								matches: that.collection,
								players: players
							});

							that.$el.html( compiledTemplate );
						});
				});
		}
	});
	return MatchesListView;
});