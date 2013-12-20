define([
	'jquery',
	'underscore',
	'backbone',
	'collections/players',
    'collections/matches',
	'text!templates/players/playersList.html'
], function($, _, Backbone, PlayersCollection, MatchesCollection, playersListTemplate){
	var PlayersListView = Backbone.View.extend({
		el: $("#content"),
		initialize: function(){
			var that = this;
			that.collection = new PlayersCollection();
			$.ajax({
				url: that.collection.getGetURL,
				type: "GET",
				dataType: "json",
				contentType: "application/json",
				data: {},
				async: true
			}).done(function(data){
					var matches = new MatchesCollection();
                    that.collection.add(data);
                    that.collection.sortByField('lastName');
                    $.ajax({
                        url: matches.getGetURL,
                        type: "GET",
                        dataType: "json",
                        contentType: "application/json",
                        data: {},
                        async: true
                    }).done(function(data){
                            var compiledTemplate;
                            matches.add(data);

                            var playerMatches = matches.filter(function(match){
                                    return (match.get("t1").p1 === 10 || match.get("t2").p1 === 10);
                                });
                            compiledTemplate = _.template( playersListTemplate, {
                                players: that.collection,
                                matches: matches
                            });

                            that.$el.html( compiledTemplate );
                        });
				});
		}
	});
	return PlayersListView;
});