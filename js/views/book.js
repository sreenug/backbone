var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template( $( '#bookTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );
        return this;
    }
});