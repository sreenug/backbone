// js/views/todos.js

  var app = app || {};

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  app.TodoView = Backbone.View.extend({

    //... is a list tag.
    //tagName: 'li',

    // Cache the template function for a single item.
    template: _.template( $('#item-template').html() ),

    // The DOM events specific to an item.
    events: {
      'click #edit': 'edit'
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      //this.$input = this.$('.edit');
      return this;
    },
    edit: function() {
      console.log('edit clicked');
    }
  });