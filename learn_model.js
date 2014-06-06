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

//get JSON from model
todoItem.toJSON();

//listen to change event
todoItem.on('change', somefunction);

//remove event listener
todoItem.off('change', somefunction, context);

//trigger event
todoItem.trigger('someevent');

//create a more complexed model
var todoItem = Backbone.Model.extend({
	//parse function is used to deal with non-standard response from server,
	//to parse it to the json data we want.
	parse : function(response) {
		/**
		 * this is the default function
		 * @return response;
		 */

		//do all the change to the response
		response = response.todo;
		response.description = response.desc;
		delete response.desc;
		return response;
	},
	//custom id attribute.
	idAttribute : '_id'
});

/**
 * instantiating models doesn't call parse function by default,
 * we need to add a property.
 */
var todoItem = new TodoItem({
	todo : {
		id : 1
	}
}, {
	parse : true
});

//return the JSON object.
todoItem.attributes;

/**
 * when update the data to the server by calling .save()
 * it will call toJSON() to serialize the data to JSON string
 * we can also over ride this function.
 */
var TodoItem = Backbone.Model.extend({
	toJSON : function() {
		/**
		 *this is the default function,
		 * @return _.clone(this.attributes);
		 */
		var attrs = _.clone(this.attributes);
		attrs.desc = attrs.description;
		attrs = _.pick(attrs, 'desc', 'status');
		//_.pick() return an object with only the "desc" and "status" properties
		return {
			todo : attrs
		};
	}
});
