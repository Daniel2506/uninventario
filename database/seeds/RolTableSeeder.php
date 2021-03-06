<?php

use Illuminate\Database\Seeder;
use App\Models\Admin\Rol;

class RolTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::create([
            'name'   => 'admin',
            'display_name'   => 'Administrador',
            'description'   => 'Perfil administrador plataforma'
        ]);
    }
}
