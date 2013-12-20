define([
	'jquery',
	'underscore',
	'backbone',
    'collections/rules',
	'text!templates/rule/rule.html'
], function($, _, Backbone, RulesCollection, ruleTemplate){
	var RuleView = Backbone.View.extend({
		el: $('#content'),
        initialize: function( params ){
            var that = this;
            that.id = params.id;
            that.rulesCollection = new RulesCollection();
            $.ajax({
                url: that.rulesCollection.getGetURL,
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                data: {},
                async: true
            }).done(function( data ){
                    that.rulesCollection.add( data );
                    var compiledTemplate = _.template( ruleTemplate, {
                       rule: that.rulesCollection.where( { id: parseInt( that.id ) } )[0]
                    });
                    that.$el.html( compiledTemplate );
                });
		}
	});
	return RuleView;
});