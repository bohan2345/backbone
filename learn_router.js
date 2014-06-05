/**
 * create a router (router map URLs to actions)
 * in this way, when the url path is /todos or #todos
 * the index function will be called. 
 * @param todos/:id  id here is a parameter, 
 * it will be passed into the index function when called.
 */
var router = new Backbone.Router.extend({
	routes:{ "todos/:id":"index"},
	/**
	 * we can also pass multiple parameters,
	 * "todos/:param1/:param2" or "todos/:param1-:param2"
	 * use ":" to define an parameter.
	 * "todos/*param" here * is a wildcard matches everthing after "todos/".
	 */
	index: function(id){}	
});

//Let Backbone starts watching for history changes.
Backbone.history.start({pushState: true});

//use navigate function to trigger the route change.
router.navigate("todos/1",{trigger:true});