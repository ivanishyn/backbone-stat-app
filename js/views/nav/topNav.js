define([
	'jquery',
	'underscore',
	'backbone',
    'collections/rules',
	'text!templates/nav/topNav.html'
], function($, _, Backbone, RulesCollection, topNavTemplate){
	var TopNavView = Backbone.View.extend({
		el: $('#topNav'),
		render: function(){
            that = this;
            that.rulesCollection = new RulesCollection();
            $.ajax({
                url: that.rulesCollection.getGetURL,
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                data: {},
                async: true
            }).done(function(data){
                    that.rulesCollection.add( data );
                    var compiledTemplate = _.template( topNavTemplate, {
                       rules: that.rulesCollection
                    });
                    that.$el.html( compiledTemplate );
                });
		}
	});
	return TopNavView;
});