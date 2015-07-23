// js/views/app.js

  var app = app || {};

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#todoapp',

    events: {
      'click #new-todo': 'createOnEnter',
      'click #clear-completed': 'clearCompleted',
      'click #toggle-all': 'toggleAllComplete'
    },


    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed.
    initialize: function() {
      this.allCheckbox = this.$('#toggle-all')[0];
      this.$input = this.$('#new-todo');
      this.$footer = this.$('#footer');
      this.$main = this.$('#main');

      this.listenTo(app.Todos, 'add', this.addOne);
      this.listenTo(app.Todos, 'reset', this.addAll);

      this.listenTo(app.Todos, 'change:completed', this.filterOne);
      this.listenTo(app.Todos,'filter', this.filterAll);
      this.listenTo(app.Todos, 'all', this.render);

      app.Todos.fetch();
    },

    render: function() {
      console.log('calling app render');
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( todo ) {
      var view = new app.TodoView({ model: todo });
      $('#todo-list').append( view.render().el );
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      this.$('#todo-list').html('');
      app.Todos.each(this.addOne, this);
    },

     newAttributes: function() {
      return {
        ttype: $("#ttype").val(),
        person: $("#person").val(),
        village: $("#village").val(),
        crop: $("#crop").val(),
        quantity: $("#quantity").val(),
        price: $("#price").val(),
        total: $("#total").val(),
        paid: $("#paid").val(),
        pending: $("#pending").val(),
        remark: $("#remark").val()
      };
    },

    // New
    // If you hit return in the main input field, create new Todo model,
    // persisting it to localStorage.
    createOnEnter: function( event ) {

      app.Todos.create( this.newAttributes() );
      $('#myForm')[0].reset();
    },


  });