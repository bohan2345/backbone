//create a collection class
var TodoList = Backbone.Collection.extend({
	model : TodoItem
});

//new instance
var todoList = new TodoList();

todoList.length;
todoList.add(todoItem);
todoList.at(1);
todoList.get(1);
todoList.remove(todoItem);

//reset the todoList instance with a list of new models
todoList.reset(a_list_of_new_models);

//fetch data from server
todoList.url = "/models";
todoList.fetch();

//add event listener (todoItem is the new item been added)
todoList.on("add", function(todoItem) {
});

//iteration (call the function for each item)
todoList.foreach(function(todoItem) {
});

//map function
todoList.map(function(todoItem) {
	return todoItem.get("id");
});

//filter models by some criteria, the return of the function should be a boolean expression
todoList.filter(function(todoItem) {
	return todoItem.get("id") > 2;
});
