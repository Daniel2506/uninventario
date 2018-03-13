<?php

namespace App\Models\Admin;

use Zizaco\Entrust\EntrustPermission;

class Permiso extends EntrustPermission
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'permiso';

    public $timestamps = false;
}
