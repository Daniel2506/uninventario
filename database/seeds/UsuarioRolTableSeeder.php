<?php

use Illuminate\Database\Seeder;
use App\Models\Admin\UsuarioRol;

class UsuarioRolTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UsuarioRol::create([
            'user_id'   => 1,
            'role_id'   => 1,
        ]);
    }
}
