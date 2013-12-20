define([
	'underscore',
	'backbone',
	'models/player'
], function(_, Backbone, Player){
	var Players = Backbone.Collection.extend({
		model: Player,
		initialize: function() {
			this.sort_key = 'lastName'; // default sort key
		},
		comparator: function(item) {
			return item.get(this.sort_key);
		},
		sortByField: function(fieldName) {
			this.sort_key = fieldName;
			this.sort();
		}
	});
	Players.prototype.getGetURL = 'https://api.mongolab.com/api/1/databases/tennismath/collections/players?apiKey=xRAOfHdOSyFUysspNwaRvodSJgFWmIa-';
	return Players;
});