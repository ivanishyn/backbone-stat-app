define([
	'underscore',
	'backbone',
	'models/rule'
], function(_, Backbone, Rule){
	var Rules = Backbone.Collection.extend({
		model: Rule
	});
	Rules.prototype.getGetURL = 'https://api.mongolab.com/api/1/databases/tennismath/collections/rules?apiKey=xRAOfHdOSyFUysspNwaRvodSJgFWmIa-';

	//return Rules;

    var rules = new Backbone.Collection;
    rules.url = "https://api.mongolab.com/api/1/databases/tennismath/collections/rules?apiKey=xRAOfHdOSyFUysspNwaRvodSJgFWmIa-";
    rules.fetch();
});