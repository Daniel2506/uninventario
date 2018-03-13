<?php

use Illuminate\Database\Seeder;
use App\Models\Admin\Modulo;

class ModulosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	Modulo::create([
        	'name' => 'administracion',
        	'display_name' => 'Administracion',
        	'nivel1' => 1
    	]);

    	// Administracion
    	Modulo::create([
        	'display_name' => 'Modulos',
        	'nivel1' => 1,
        	'nivel2' => 1
    	]);

    	Modulo::create([
        	'display_name' => 'Referencias',
        	'nivel1' => 1,
        	'nivel2' => 2
    	]);

    	//Modulos

    	Modulo::create([
        	'name' => 'users',
        	'display_name' => 'Usuarios',
        	'nivel1' => 1,
        	'nivel2' => 1,
        	'nivel3' => 2
    	]);

    	// Modulo::create([
        // 	'name' => 'roles',
        // 	'display_name' => 'Roles',
        // 	'nivel1' => 1,
        // 	'nivel2' => 1,
        // 	'nivel3' => 3
    	// ]);
        //
    	// //Referencias
    	// Modulo::create([
        // 	'name' => 'modulos',
        // 	'display_name' => 'Modulos',
        // 	'nivel1' => 1,
        // 	'nivel2' => 2,
        // 	'nivel3' => 3
    	// ]);
        //
    	// Modulo::create([
        // 	'name' => 'permisos',
        // 	'display_name' => 'Permisos',
        // 	'nivel1' => 1,
        // 	'nivel2' => 2,
        // 	'nivel3' => 5
    	// ]);
    }
}
