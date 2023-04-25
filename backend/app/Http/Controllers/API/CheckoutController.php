<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Orderitems;
use App\Models\Cart;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    public function placeorder(Request $request)
    {
        if(auth('sanctum')->check())
        {
            $validator = Validator::make($request->all(), [
                'lastname'=> 'required|max:191',
                'firstname'=> 'required|max:191',
                'phone'=> 'required|max:191',
                'email'=> 'required|max:191',
                'address'=> 'required|max:191',
                'city'=> 'required|max:191',
                'state'=> 'required|max:191',
                'zipcode'=> 'required|max:191',

            ]);
            if($validator->fails())
            {
                return response()->json([
                    'status'=> 422,
                    'errors'=>$validator->messages(),
                ]);
            }
            else
            {
                $user_id = auth('sanctum')->user()->id;
                $order = new Order;
                $order->user_id = $user_id;
                $order->lastname = $request->lastname;
                $order->firstname = $request->firstname;
                $order->phone = $request->phone;
                $order->email = $request->email;
                $order->address = $request->address;
                $order->city = $request->city;
                $order->state = $request->state;
                $order->zipcode = $request->zipcode;

                $order->payment_mode = "COD";
                $order->tracking_no = 'pizza'.rand(1111, 9999);
                $order->save();

                $cart = Cart::where('user_id',$user_id)->get();

                $orderitems = [];
                foreach($cart as $item){
                    $orderitems[] = [
                        'product_id'=>$item->product_id,
                        'quantity'=>$item->product_quantity,
                        'price'=>$item->product->selling_price,
                    ] ;

                    $item->product-> update([
                        'quantity'=>$item->product->quantity - $item->product_quantity
                    ]);

                    $order->orderitems()->createMany($orderitems);
                    Cart::destroy($cart);
                }

                return response()->json([
                    'status'=> 200,
                    'message'=>'A rendelés sikeresen elhelyezve',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status'=> 401,
                'message'=> 'Jelentkezzen be a folyatáshoz',
            ]);
        }

    }

    public function validateOrder(Request $request)
    {
        if(auth('sanctum')->check())
        {
            $validator = Validator::make($request->all(), [
                'lastname'=> 'required|max:191',
                'firstname'=> 'required|max:191',
                'phone'=> 'required|max:191',
                'email'=> 'required|max:191',
                'address'=> 'required|max:191',
                'city'=> 'required|max:191',
                'state'=> 'required|max:191',
                'zipcode'=> 'required|max:191',

            ]);
            if($validator->fails())
            {
                return response()->json([
                    'status'=> 422,
                    'errors'=>$validator->messages(),
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 200,
                    'message'=>'A rendelés sikeresen elhelyezve',
                ]);
            }
       }
       else
        {
            return response()->json([
                'status'=> 401,
                'message'=> 'Jelentkezzen be a folyatáshoz',
            ]);
        }
    }
}
