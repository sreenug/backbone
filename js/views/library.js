var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events:{
        'click #add':'addBook'
    },

    addBook: function( e ) {
        console.log('add click');
        e.preventDefault();

        if($("#addBook").valid()) {

            var formData = {};

            $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
                if( $( el ).val() != '' )
                {
                    formData[ el.id ] = $( el ).val();
                }
            });

            formData['ttype'] = $("#ttype").val();

            console.log(formData);

            this.collection.create(formData);
            $(".ui-datepicker-calendar").remove();
            $("#books_list").table('refresh');
            $("#addBook").toggle();
            $(".bookContainer").toggle();
        }
    },

    initialize: function( initialBooks ) {
        this.collection = new app.Library();
        this.collection.localStorage = new Backbone.LocalStorage("Points");
        this.collection.fetch();
        if(Object.getOwnPropertyNames(initialBooks).length != 0) {
            console.log('creating empty collection', initialBooks);
            this.collection.create(initialBooks);
        }
        
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );
        var $body = $('tbody');
        var list = $body.children('tr');
        $body.html(list.get().reverse());
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
        $("#books_list").table('refresh');
        var $body = $('tbody');
        var list = $body.children('tr');
        $body.html(list.get().reverse());
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        $(".ui-datepicker-calendar").remove(); 
        this.$el.find("#books_list").append( bookView.render().el );
        $("#books_list").table('refresh');
        var $body = $('tbody');
        var list = $body.children('tr');
        $body.html(list.get().reverse());
    }
});