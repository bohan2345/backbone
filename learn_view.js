//create a custom view class
var TodoView = Backbone.View.extend({
	tagName : "article",
	id : "todo-view",
	className : "todo",
	events : {
		"dblclick" : "open",
		"click .title" : "select",
		"mouseover .title .date" : "showTooltip"
	},
	template : _.template("<h3><%= description %><h3>"),
	initialize : function() {//add listener to the changes to the model
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	render : function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	},
	remove : function() {
		this.$el.remove();
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

//create a collection view
var todoListView = Backbone.View.extend({
	initialize : function() {
		this.collection.on("add", this.addOne, this);
		this.collection.on("reset", this.addAll, this);//why not just call render?? (should work)
	},
	render : function() {
		this.collection.forEach(this.addOne, this);
	},
	addOne : function(todoItem) {
		var todoView = new TodoView({
			model : todoItem
		});
		this.$el.append(todoView.render().el);
	},
	addAll : function() {
		this.collection.forEach(this.addOne, this);
	}
});
var todoListView = new TodoListView({
	collection : todoList
});

