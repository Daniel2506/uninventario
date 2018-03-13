<?php

use Illuminate\Database\Seeder;
use App\Models\Admin\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'   => 'Daniel',
            'last_name'   => 'Tellez',
            'email'    => 'dtellezrodr@uniminuto.edu.co',
            'username'    => 'admin',
            'password' => bcrypt('admin1')
        ]);
    }
}
