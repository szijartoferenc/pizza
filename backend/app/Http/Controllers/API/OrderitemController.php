<?php

namespace App\Http\Controllers\API;
use App\Models\Orderitems;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderitemController extends Controller
{
    public function index()
    {
        $orderitems = Orderitem::all();
        return response ()->json ([
            'status' => 200,
            'orderitem' => $orderitems,
        ]);
    }
}
