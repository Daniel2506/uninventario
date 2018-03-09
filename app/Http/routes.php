<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', ['as'=> 'auth/login', 'uses'=> 'Auth\AuthController@postLogin']);
Route::get('auth/logout', ['as'=> 'auth/logout', 'uses'=> 'Auth\AuthController@getLogout']);
Route::get('integrate', ['as' => 'auth/integrate', 'uses' => 'Auth\AuthController@integrate']);

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', ['as'=> 'auth/register', 'uses'=> 'Auth\AuthController@postRegister']);

Route::group(['middleware' => 'auth'], function(){
    Route::get('/', ['as' => 'dashboard', 'uses' => 'HomeController@index']);

    /*
	|-------------------------
	| Admin Routes
	|-------------------------
	*/
    // Route::group(['prefix' => 'terceros'], function()
	// {
	// 	Route::get('dv', ['as' => 'terceros.dv', 'uses' => 'Admin\TerceroController@dv']);
	// 	Route::get('rcree', ['as' => 'terceros.rcree', 'uses' => 'Admin\TerceroController@rcree']);
	// 	Route::get('search', ['as' => 'terceros.search', 'uses' => 'Admin\TerceroController@search']);
	// 	Route::post('setpassword', ['as' => 'terceros.setpassword', 'uses' => 'Admin\TerceroController@setpassword']);
	// 	Route::resource('contactos', 'Admin\ContactoController', ['only' => ['index', 'store', 'update']]);
	// 	Route::resource('roles', 'Admin\UsuarioRolController', ['only' => ['index', 'store', 'destroy']]);
	// });

    Route::resource('users', 'Admin\UserController', ['except' => ['destroy']]);
});
