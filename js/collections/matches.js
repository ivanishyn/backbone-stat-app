define([
	'underscore',
	'backbone',
	'models/match'
], function(_, Backbone, Match){
	var Matches = Backbone.Collection.extend({
		model: Match
	});
	Matches.prototype.getGetURL = 'https://api.mongolab.com/api/1/databases/tennismath/collections/matches?apiKey=xRAOfHdOSyFUysspNwaRvodSJgFWmIa-';
	return Matches;
});