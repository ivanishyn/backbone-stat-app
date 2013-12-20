define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/home',
	'views/matches/matches',
	'views/match/match',
	'views/players/players',
	'views/player/player',
    'views/player/playerEdit',
    'views/rule/rule'
], function($, _, Backbone, HomeView, MatchesView, MatchView, PlayersView, PlayerView, PlayerEditView, RuleView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			// Define URL routes
			"matches": "showMatches",
			"match/:id": "showMatch",
			"players": "showPlayers",
			"player/:id": "showPlayer",
            "player/:id/edit": "showPlayerEdit",
            "rule/:id": "showRule",

            "nogo": "",
			// Default
			"*notFound": "showHome"
		},
		showMatches: function(){
			console.log('Matches route init.');
			var matchesView = new MatchesView();
            this.beforeRender();
			matchesView.render();
			this.afterRender();
		},
		showMatch: function(id){
			console.log('Match route init.');
			var matchView = new MatchView({id: id});
            this.beforeRender();
			matchView.render();
			this.afterRender();
		},
		showPlayers: function(){
			console.log('Players route init.');
			var playersView = new PlayersView();
            this.beforeRender();
			playersView.render();
			this.afterRender();
		},
		showPlayer: function(id){
			console.log('Player route init.');
			var playerView = new PlayerView({id: id});
            this.beforeRender();
			playerView.render();
			this.afterRender();
		},
        showPlayerEdit: function(id){
            console.log('Player edit route init.');
            var playerEditView = new PlayerEditView({id: id});
            this.beforeRender();
            playerEditView.render();
            this.afterRender();
        },
        showRule: function(id){
            console.log('Rule route init.');
            var ruleView = new RuleView({id: id});
            this.beforeRender();
            ruleView.render();
            this.afterRender();
        },
		showHome: function(){
			console.log('Home route init.');
			var homeView = new HomeView();
            this.beforeRender();
			homeView.render();
			this.afterRender();
		},
        beforeRender: function(){
            $("#loading").show();
        },
		afterRender: function(){
			$(".collapse").css('height', 0);
            setTimeout(function(){
                $("#loading").hide();
            },500);
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;
		Backbone.history.start({
			//pushState: true,
			root: "/git/tennismath.web/"
			//root: "/"
		});

	};
	return {
		initialize: initialize
	};
});