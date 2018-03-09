/**
* Class getUsersMain
* @author daniel2506
*/

//Global App Backbone
app || (app = {});

(function ($, window, document, undefined) {

    app.getUsersMain = Backbone.View.extend({

        el: '#users-main',

        events: {
            'click .btn-search': 'search',
            'click .btn-clear': 'clear'
        },

        /**
        * Constructor Method
        */
        initialize : function() {
            var _this = this;

            this.$usersSearchTable = this.$('#users-search-table');
            this.$searchName = this.$('#name');
            this.$searchMail = this.$('#mail');

            this.usersSearchTable = this.$usersSearchTable.DataTable({
                dom: "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                processing: true,
                serverSide: true,
                language: window.Misc.dataTableES(),
                ajax: {
                    url: window.Misc.urlFull( Route.route('users.index') ),
                    data: function( data ) {
                        data.persistent = true;
                        data.user_nombre = _this.$searchName.val();
                        data.user_email = _this.$searchMail.val();
                    }
                },
                columns: [
                    { data: 'id', name: 'id' },
                    { data: 'name', name: 'name' },
                    { data: 'email', name: 'email' },
                    { data: 'username', name: 'username'}
                ],
                columnDefs: [
                    {
                        targets: 0,
                        width: '15%',
                        render: function ( data, type, full, row ) {
                            return '<a href="'+ window.Misc.urlFull( Route.route('users.show', {users: full.id }) )  +'">' + data + '</a>';
                        }
                    }
                ]
			});
        }
    });

})(jQuery, this, this.document);

/**
 * Utilities for seg component
 *
 *
 */
( function( $, window, document, undefined ){

    var Misc = function( a ){

        // attributes or global vars here

    }

    Misc.prototype = {

        /**
        * Inializes the functions when DOM ready
        */
        initialize: function(){

        },

        /**
         *  Serialize form into json format
         *
         *  @param { string } name class or id of the html element to embed the loader
         *  @return { object } form into json
         *
         */

        formToJson: function( selector ){
            var o = {}, a = [];
            if( $.prototype.isPrototypeOf(selector) ){
                a = selector.serializeArray();
            }
            else{
                a = $(selector).serializeArray();
            }

            $.each( a, function() {
                if ( o[ this.name ] !== undefined ) {
                    if ( ! o[this.name].push ) {
                        o[ this.name ] = [ o[ this.name ] ];
                    }

                    o[ this.name ].push( this.value || '' );

                } else {
                    o[ this.name ] = this.value || '';
                }
            });

            return o;
        },

        /**
        * validate the urls
        */
        isUrl : function( str ){

            // var patt = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+\.[a-zA-Z]{2,3}(\/([^\n\r\s])*)?(\?([^\n\r\s])*)?/i;
            var patt = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+(\/(.)*)?(\?(.)*)?/i;

            return patt.test( str );
        },

        /**
        * Build URI with route and base url
        */
        urlFull: function ( route ){

            if( !this.isUrl(document.url) )
                return route;

            route || (route = '');
            var patt = /^\//;
            patt.test(route) || (route = '/'+route);

            return document.url + route;
        },

        /**
        * Build URI with route and base url
        */
        parseErrors: function ( errors ){
            var text = '';
            if( _.isObject( errors ) ){

                var listError = '<ul>';

                $.each(errors, function(field, item) {
                     listError += '<li>'+ item[0] +'</li>';
                });
                listError += '</ul>';

                text = listError;
            }
            return text;
        },

        /**
        *   ClearFields the forms
        */
        clearForm: function( form ){
            form.find(':input').each(function(){
                field_type = $(this);

                // Inputmask data-currency
                if ( field_type.attr('data-currency') == '' || field_type.attr('data-currency-negative') == ''|| field_type.attr('data-currency-price') == ''){
                    field_type.val(0);
                }

                // Checkbox && radiobutton
                if( field_type.attr('checked') ){
                    field_type.iCheck('check');
                }else{
                    field_type.iCheck('uncheck');
                }

                // Select2
                if( field_type.hasClass('select2-default-clear') || field_type.hasClass('select2-default') ){
                    var name = field_type.attr('id');
                    field_type.val('').trigger('change');
                    $('#select2-'+name+'-container').removeAttr('title');

                    // Select2 with ajax
                }else if( field_type.hasClass('choice-select-autocomplete') ){
                    field_type.empty();
                    id = field_type.attr('id');
                    $('#select2-'+id+'-container').removeAttr('title');
                }

            });
            form.trigger('reset');
        },

        /**
        *  Sets a loading spinner in a box
        * @param { selector } String|Object Selector jQuery
        */
        setSpinner: function( selector ){
            if ( !selector ) return;

            $(selector).prepend('<div class="overlay"><i class="fa fa-refresh fa-spin"></i></div>');
        },

        /**
        * Removes the loading spinner and trigger a callback
        * @param { wrap } String|Object wrapper jQuery element
        *
        */
        removeSpinner: function( selector ){

            var $selector = $(selector).find( '.overlay' );

            if($selector.length)
                $selector.remove();
        },

        /**
        * Display the DataTables interface in Spanish
        */
        dataTableES: function(){
            return {
                "sProcessing":     "<div class=\"overlay\"><i class=\"fa fa-refresh fa-spin\"></i></div>",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        },

        /**
        * Redirect to an specific url or refresh the page
        * @param { string } the url to be redirect to
        *
        */
        redirect: function( url ){
            if( url !== undefined && url != ''){
                window.location = url;
            }else{
                window.location.reload();
            }
        },

        /**
        * Redirect to an specific url or refresh the page
        * @param { string } the url to be redirect to
        *
        */
        successRedirect: function( msg, url ){
            alertify.success(msg);
            setTimeout(function(){
                window.Misc.redirect( url );
            }, 500);
        },

        /**
        * Format COP currency
        * @param { value }
        *
        */
        currency: function( value ){
            return accounting.formatMoney(value, '', 2, ".", ",");
        },
    };

    window.Misc = new Misc();
    window.Misc.initialize();

})( jQuery, this, this.document );

(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"auth\/login","name":null,"action":"App\Http\Controllers\Auth\AuthController@getLogin"},{"host":null,"methods":["POST"],"uri":"auth\/login","name":"auth\/login","action":"App\Http\Controllers\Auth\AuthController@postLogin"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/logout","name":"auth\/logout","action":"App\Http\Controllers\Auth\AuthController@getLogout"},{"host":null,"methods":["GET","HEAD"],"uri":"integrate","name":"auth\/integrate","action":"App\Http\Controllers\Auth\AuthController@integrate"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/register","name":null,"action":"App\Http\Controllers\Auth\AuthController@getRegister"},{"host":null,"methods":["POST"],"uri":"auth\/register","name":"auth\/register","action":"App\Http\Controllers\Auth\AuthController@postRegister"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":"dashboard","action":"App\Http\Controllers\HomeController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"users","name":"users.index","action":"App\Http\Controllers\Admin\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"users\/create","name":"users.create","action":"App\Http\Controllers\Admin\UserController@create"},{"host":null,"methods":["POST"],"uri":"users","name":"users.store","action":"App\Http\Controllers\Admin\UserController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"users\/{users}","name":"users.show","action":"App\Http\Controllers\Admin\UserController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"users\/{users}\/edit","name":"users.edit","action":"App\Http\Controllers\Admin\UserController@edit"},{"host":null,"methods":["PUT"],"uri":"users\/{users}","name":"users.update","action":"App\Http\Controllers\Admin\UserController@update"},{"host":null,"methods":["PATCH"],"uri":"users\/{users}","name":null,"action":"App\Http\Controllers\Admin\UserController@update"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // Route.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // Route.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // Route.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // Route.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // Route.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // Route.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.Route = laroute;
    }

}).call(this);


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

/**
* Init Class
*/

/*global*/
var app = app || {};

(function ($, window, document, undefined) {

    var InitComponent = function() {

        //Init Attributes
        $.ajaxSetup({
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    }

    String.prototype.replaceAll = function(search, replace)
    {
        if(!replace)
            return this;
        return this.replace(new RegExp('[' + search + ']', 'g'), replace);
    };

    InitComponent.prototype = {

        /**
        * Constructor or Initialize Method
        */
        initialize: function () {
            //Initialize
            this.initApp();
            this.initICheck();
            this.initAlertify();
            this.initInputMask();
            this.initSelect2();
            this.initToUpper();
            this.initSpinner();
            this.initDatePicker();
            this.initTimePicker();
        },

        /**
        * Init Backbone Application
        */
        initApp: function () {
            window.app.AppRouter.start();
        },

        /**
        * Init icheck
        */
        initICheck: function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_minimal-green',
                radioClass: 'iradio_minimal-green'
            });
        },

        /**
        * Init alertify
        */
        initAlertify: function () {
            alertify.logPosition("bottom right");
        },

        /**
        * Init inputMask
        */
        initInputMask: function () {

            $("[data-mask]").inputmask();

            $("[data-currency]").inputmask({
                radixPoint: ",",
                alias: 'currency',
                removeMaskOnSubmit: true,
                unmaskAsNumber: true,
                min: 0
            });

            $("[data-currency-negative]").inputmask({
                radixPoint: ",",
                alias: 'currency',
                prefix: '',
                removeMaskOnSubmit: true,
                unmaskAsNumber: true,
            });
        },

        /**
        * Init select2
        */
        initSelect2: function () {
            var _this = this,
                config = {
                  '.select2-default' : { language: 'es', placeholder: 'Seleccione', allowClear: false },
                  '.select2-default-clear'  : { language: 'es', placeholder: 'Seleccione', allowClear: true },
                  '.choice-select-autocomplete': {
                    language: "es",
                    placeholder:'Seleccione una opción',
                    ajax: {
                        delay: 250,
                        data: function (params) {
                            return {
                                q: params.term,
                                page: params.page
                            };
                        },
                        processResults: function (data, params) {
                            params.page = params.page || 1;
                            return {
                                results: data,
                                pagination: {
                                    more: (params.page * 30) < data.total_count
                                }
                            };
                        },
                        escapeMarkup: function (markup) { return markup; },
                        cache: true,
                        minimumInputLength: 1
                    }
                  }
                };

            // Instance selects to choice plugin
            for (var selector in config){
                $(selector).each(function(index, el) {
                    var $el = $(el);

                    if( $el.data('select2') == undefined ){
                        $el.select2(config[selector]);

                        // set default option
                        if(selector == '.choice-select-autocomplete') {

                            var initialId = $el.data('initial-value');
                            var $option = null;

                            if(initialId) {
                                var ajaxOptions = $el.data('select2').dataAdapter.ajaxOptions;

                                $option = $('<option selected>Cargando...</option>').val(initialId);
                                $el.append($option).trigger('change');

                                $.get( ajaxOptions.url, {id:initialId}, function(data) {
                                    $option.text(data[0].text).val(data[0].id);
                                    $option.removeData();
                                    $el.trigger('change');
                                });
                            }
                        }
                    }
                });
            }
        },

        /**
        * Init toUpper
        */
        initToUpper: function () {
           $('.input-toupper').change(function(){
               $(this).val( $(this).val().toUpperCase() );
           });

           $('.input-lower').change(function(){
                var dato = $(this).val( $(this).val().toLowerCase() );
                var reg = /[^a-z0-9]/i;
                var valor = '';
                for(var i=0; i <= dato.val().length-1; i++){
                    if( !reg.test(dato.val().charAt(i)) ){
                        dato.val().replace(reg,'');
                        valor += dato.val().charAt(i);
                    }
                }
                $(this).val( valor );
           });
        },

        /**
        * Init initSpinner
        */
        initSpinner: function () {
            $('.spinner-percentage').spinner({
                step: 0.1,
                start: 0,
                min: 0,
                max: 100,
                numberFormat: "n",
                stop: function( event, ui ) {
                    if(!_.isNull(this.value) && !_.isUndefined(this.value) && !_.isEmpty(this.value)) {
                        if(!$.isNumeric( this.value ) || this.value > 100 || this.value < 0){
                            $(this).spinner( 'value', 0 );
                        }
                    }
               }
            });
        },

        /**
        * Init initValidator
        */
        initValidator: function () {

            $('form[data-toggle="validator"]').each(function () {
                var $form = $(this)
                $.fn.validator.call($form, $form.data())
            })
        },

        /**
        * Init Datepicker
        */
        initDatePicker: function () {

            $('.datepicker').datepicker({
                autoclose: true,
                language: 'es',
                format: 'yyyy-mm-dd'
            });
        },

        /**
        * Init Timepicker
        */
        initTimePicker: function () {

            $(".timepicker").timepicker({
                showInputs: false,
                showMeridian: false
            });
        }
    };

    //Init App Components
    //-----------------------
    $(function() {
        window.initComponent = new InitComponent();
        window.initComponent.initialize();
    });

})(jQuery, this, this.document);

//# sourceMappingURL=app.min.js.map
