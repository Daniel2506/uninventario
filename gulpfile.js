var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'libs': './resources/assets/libs/',
    'adminlte': './resources/assets/libs/admin-lte/'
}

elixir(function(mix) {
    mix.styles([
        paths.libs + 'jquery-ui/themes/base/core.css',
        paths.libs + 'jquery-ui/themes/base/spinner.css',
        paths.libs + 'jquery-ui/themes/base/theme.css',
        paths.libs + 'bootstrap/dist/css/bootstrap.css',
        paths.libs + 'font-awesome/css/font-awesome.css',
        paths.adminlte + 'dist/css/skins/skin-blue.css',
        paths.adminlte + 'dist/css/AdminLTE.css',
        paths.adminlte + 'plugins/iCheck/minimal/green.css',
        paths.libs + 'datatables.net-bs/css/dataTables.bootstrap.css',
        paths.libs + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
        paths.adminlte + 'plugins/timepicker/bootstrap-timepicker.css',
        paths.libs + 'fullcalendar/dist/fullcalendar.min.css'
    ], 'public/css/vendor.min.css');

    mix.sass('app.scss', 'public/css/app.min.css');

    mix.scripts([
        paths.libs + 'jquery/dist/jquery.js',
        paths.libs + 'jquery-ui/ui/core.js',
        paths.libs + 'jquery-ui/ui/widget.js',
        paths.libs + 'jquery-ui/ui/spinner.js',
        paths.libs + 'bootstrap/dist/js/bootstrap.js',
        paths.libs + 'admin-lte/dist/js/adminlte.js',
        paths.libs + 'underscore/underscore.js',
        paths.libs + 'backbone/backbone.js',
        paths.libs + 'datatables.net/js/jquery.dataTables.js',
        paths.libs + 'datatables.net-bs/js/dataTables.bootstrap.js',
        paths.libs + 'alertifyjs/dist/js/alertify.js',
        paths.libs + 'inputmask/dist/jquery.inputmask.bundle.js',
        paths.libs + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
        paths.adminlte + 'plugins/iCheck/icheck.js',
        paths.adminlte + 'plugins/timepicker/bootstrap-timepicker.js',
   	], 'public/js/vendor.min.js')
    .scripts([
        'models/*.js',
        'collections/**/*.js',
        'views/**/*.js',
        'helpers/misc.js',
        'helpers/routes.js',
        'routes.js',
        'init.js'
    ], 'public/js/app.min.js')

    // Cache busting
    mix.version(['css/app.min.css', 'css/vendor.min.css', 'js/app.min.js', 'js/vendor.min.js']);

    mix.copy(paths.adminlte + 'bootstrap/fonts/', 'public/build/fonts');
    mix.copy(paths.adminlte + 'plugins/iCheck/minimal/green**.png', 'public/build/css');
    mix.copy(paths.libs + 'fine-uploader/dist/**.gif', 'public/build/css');
    mix.copy(paths.libs + 'font-awesome/fonts/', 'public/build/fonts');
    mix.copy(paths.libs + 'jquery-ui/themes/base/images/', 'public/build/css/images/');
});
