<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateDispatcFirstPiecePrice extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //修改运费属性
        if (Schema::hasTable('yz_dispatch')) {
            if (Schema::hasColumn('yz_dispatch', 'first_piece_price')) {
                Schema::table('yz_dispatch', function (Blueprint $table) {
                    $table->decimal('first_piece_price',14)->nullable()->change();
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
