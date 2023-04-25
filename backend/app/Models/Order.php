<?php

namespace App\Models;
use App\Models\Orderitems;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
       'lastname',
       'firstname',
       'phone',
       'email',
       'address',
       'city',
       'state',
       'zipcode',
       'payment_id',
       'payment_mode',
       'tracking_no',
       'status',
       'remark',

    ];

    public function orderitems()
    {
        return $this->hasMany(Orderitems::class, 'order_id', 'id');
    }

}
