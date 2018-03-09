<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStockTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock', function (Blueprint $table){
            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->integer('stock_producto')->unsigned();
            $table->integer('stock_bodega')->unsigned();
            $table->integer('stock_cantidad')->unsigned();

            $table->foreign('stock_producto')->references('id')->on('producto')->onDelete('restrict');
            $table->foreign('stock_bodega')->references('id')->on('bodega')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock');
    }
}
