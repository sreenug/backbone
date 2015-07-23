var app = app || {};

app.Book = Backbone.Model.extend({
	//localStorage: new Backbone.LocalStorage("Points"),
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