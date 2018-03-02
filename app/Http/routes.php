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
/*
|--------------------------------------------------------------------------
| Routes Auth
|--------------------------------------------------------------------------
*/

// Route::group(['prefix' => 'auth'], function()
// {
// 	Route::post('login', ['as' => 'auth.login', 'uses' => 'Auth\AuthController@postLogin']);
// 	Route::get('logout', ['as' => 'auth.logout', 'uses' => 'Auth\AuthController@getLogout']);
// 	Route::get('integrate', ['as' => 'auth.integrate', 'uses' => 'Auth\AuthController@integrate']);
// });
// Route::get('login', ['as' => 'login', 'uses' => 'Auth\AuthController@getLogin']);
// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', ['as'=> 'auth/login', 'uses'=> 'Auth\AuthController@postLogin']);
Route::get('auth/logout', ['as'=> 'auth/loout', 'uses'=> 'Auth\AuthController@getLogout']);

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', ['as'=> 'auth/register', 'uses'=> 'Auth\AuthController@postRegister']);

Route::group(['middleware' => 'auth'], function(){
    Route::get('/', function () {
        return view('welcome');
    });
});
