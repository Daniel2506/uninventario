/**
* Class AppRouter  of Backbone Router
* @author KOI || @dropecamargo
* @link http://koi-ti.com
*/

//Global App Backbone
app || (app = {});

(function ($, window, document, undefined) {

    app.AppRouter = new( Backbone.Router.extend({
        routes : {
            /*
            |-----------------------
            | Administracion
            |-----------------------
            */

            //Users
            'users(/)': 'getUsersMain',
            // 'users/create(/)': 'getUsersCreate',
            // 'users/:user(/)': 'getUsersShow',
            // 'users/:user/edit(/)': 'getUsersEdit',
        },

        /**
        * Parse queryString to object
        */
        parseQueryString : function(queryString) {
            var params = {};
            if(queryString) {
                _.each(
                    _.map(decodeURI(queryString).split(/&/g),function(el,i){
                        var aux = el.split('='), o = {};
                        if(aux.length >= 1){
                            var val = undefined;
                            if(aux.length == 2)
                                val = aux[1];
                            o[aux[0]] = val;
                        }
                        return o;
                    }),
                    function(o){
                        _.extend(params,o);
                    }
                );
            }
            return params;
        },

        /**
        * Constructor Method
        */
        initialize : function ( opts ){
            // Initialize resources
      	},

        /**
        * Start Backbone history
        */
        start: function () {
            var config = { pushState: true };
            if( document.domain.search(/localhost/gi) != '-1' ) {
                config.root = '/uninventario/public/';
            }

            Backbone.history.start( config );
        },

        // Users
        getUsersMain: function () {

            if ( this.mainUsersView instanceof Backbone.View ){
                this.mainUsersView.stopListening();
                this.mainUsersView.undelegateEvents();
            }

            this.mainUsersView = new app.getUsersMain( );
        },
    }));
})(jQuery, this, this.document);
