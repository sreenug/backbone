/*global Backbone */
var app = app || {};

	// ----------

// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
app.Todo = Backbone.Model.extend({
	// Default attributes for the todo
	// and ensure that each todo created has `title` and `completed` keys.
	defaults: {
		ttype: '',
		person: '',
		village: '',
		crop: '',
		quantity: 0,
		price:0,
		total:0,
		paid:0,
		pending:0,
		remark: ''
	},

});
