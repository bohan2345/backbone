//create a custom view class
var TodoView = Backbone.View.extend({
	tagName : "article",
	id : "todo-view",
	className : "todo",
	events : {
		"dbclick" : "open",
		"click .title" : "select",
		"mouseover .title .date" : "showTooltip"
	},
	template : _.template("<h3><%= description %><h3>"),
	render : function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	},
	open : function() {
	},
	select : function() {
	},
	showTooltip : function() {
	}
});

//new view instance
var todoView = new TodoView({
	model : todoItem
});

todoView.render();
