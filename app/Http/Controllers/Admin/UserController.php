<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\Admin\User;
use DB, Log, Datatables, Cache;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $query = User::select('id', DB::raw("CONCAT(name, ' ' , last_name) AS name"), 'username', 'email');

            // Persistent data filter
            if($request->has('persistent') && $request->persistent) {
                session(['search_name' => $request->has('user_name') ? $request->user_name : '']);
                session(['search_email' => $request->has('user_email') ? $request->user_email : '']);
            }

            return Datatables::of($query)
                ->filter(function($query) use($request) {
                    // Nombre
                    if($request->has('user_name')) {
                        $query->where(function ($query) use($request) {
                            $query->whereRaw("name LIKE '%{$request->user_name}%'");
                            $query->orWhereRaw("last_name LIKE '%{$request->user_name}%'");
                            $query->orWhereRaw("CONCAT(name,' ',last_name) LIKE '%{$request->user_name}%'");
                        });
                    }
                    // Email
                    if($request->has('user_email')) {
                        $query->whereRaw("email LIKE '%{$request->user_email}%'");
                    }

                })->make(true);
        }
        return view('admin.users.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
