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
