//create model with a root url
var TodoItem = Backbone.Model.extend({
	urlRoot : '/rooturl'
});

//create model with default value
var TodoItem = Backbone.Model.extend({
	defaults : {
		description : "default description"
	}
});

//new model instance
var todoItem = new TodoItem();

//fetch model with id
var todoItem = new TodoItem({
	id : 1
});
todoItem.fetch();

//update the model
todoItem.set({
	description : "new description"
});
todoItem.save();

//get attribute
todoItem.get('id');

//delete model
todoItem.destroy();

//get json from model
todoItem.toJSON();

//listen to change event
todoItem.on('change', somefunction);

//remove event listener
todoItem.off('change', somefunction, context);

//trigger event
todoItem.trigger('someevent');
