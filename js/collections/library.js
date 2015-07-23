var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage("Points")

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    
});