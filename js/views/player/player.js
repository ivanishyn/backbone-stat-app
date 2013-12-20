define([
	'jquery',
	'underscore',
	'backbone',
	'fileupload',
	'collections/players',
    'collections/matches',
	'text!templates/player/player.html'
], function($, _, Backbone, fileupload, PlayersCollection, MatchesCollection, playerTemplate){
	var PlayerView = Backbone.View.extend({
		el: $("#content"),
		initialize: function(params){
			var that = this,
                matches = new MatchesCollection();
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

                            compiledTemplate = _.template( playerTemplate, {
                                player: that.collection.where({id: parseInt(that.id)})[0],
                                players: that.collection,
                                matches: matches
                            });
                            that.$el.html( compiledTemplate );
                    });
				});
		}
	});
	return PlayerView;
});