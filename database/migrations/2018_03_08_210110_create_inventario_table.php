<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventario',function(Blueprint $table){
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('inventario_producto')->unsigned();
            $table->integer('inventario_bodega')->unsigned();
            $table->integer('inventario_documentos')->unsigned();
            $table->integer('inventario_numero_documento')->unsigned();
            $table->integer('inventario_entrada')->unsigned();
            $table->integer('inventario_salida')->unsigned();
            $table->double('inventario_costo')->default(0);
            $table->double('inventario_costo_promedio')->default(0);
            $table->integer('inventario_usuario_elaboro')->unsigned();
            $table->dateTime('inventario_fh_elaboro');

            $table->foreign('inventario_usuario_elaboro')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('inventario_producto')->references('id')->on('producto')->onDelete('restrict');
            $table->foreign('inventario_bodega')->references('id')->on('bodega')->onDelete('restrict');
            $table->foreign('inventario_documentos')->references('id')->on('documentos')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventario');
    }
}
