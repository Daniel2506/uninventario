<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBodegaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bodega',function(Blueprint $table){
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('bodega_nombre', 50)->unique();
            $table->boolean('bodega_activo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bodega');
    }
}
