<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UsersTableSeeder::class);
        $this->call(PermisosTableSeeder::class);
        $this->call(ModulosTableSeeder::class);
        $this->call(RolTableSeeder::class);
        $this->call(UsuarioRolTableSeeder::class);
        
        Model::reguard();
    }
}
