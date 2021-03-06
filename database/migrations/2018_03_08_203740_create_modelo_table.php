<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModeloTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modelo',function(Blueprint $table){
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('modelo_nombre', 50)->unique();
            $table->boolean('modelo_activo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('modelo');
    }
}
