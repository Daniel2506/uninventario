<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('producto', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('producto_nombre', 100);
            $table->string('producto_codigo', 15)->unique()->comment = 'Codigo producto';
            $table->double('producto_precio')->default(0)->comment = 'Valor de venta';
            $table->double('producto_costo')->default(0)->comment = 'Valor de compra';
            $table->integer('producto_categoria')->unsigned();
            $table->integer('producto_modelo')->unsigned()->nullable();
            $table->integer('producto_impuesto')->unsigned();

            $table->foreign('producto_categoria')->references('id')->on('categoria')->onDelete('restrict');
            $table->foreign('producto_modelo')->references('id')->on('modelo')->onDelete('restrict');
            $table->foreign('producto_impuesto')->references('id')->on('impuesto')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('producto');
    }
}
