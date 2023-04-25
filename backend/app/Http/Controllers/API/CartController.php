<?php

namespace App\Http\Controllers\API;
use App\Models\Cart;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
   public function addtocart(Request $request)
   {
    if(auth('sanctum')->check())
    {
        $user_id = auth('sanctum')->user()->id;
        $product_id = $request->product_id;
        $product_quantity = $request->product_quantity;

        $productCheck = Product::where('id', $product_id)->first();
        if ($productCheck)
        {
            if(Cart::where('product_id', $product_id)->where('user_id',$user_id)->exists())
            {
                return response()->json([
                    'status'=> 409,
                    'message'=>$productCheck->name.'A kosárhoz már hozzá van adva',
                ]);
            }
            else
            {
                $cartitem = new Cart;
                $cartitem->user_id = $user_id;
                $cartitem->product_id = $product_id;
                $cartitem->product_quantity = $product_quantity;
                $cartitem->save();

                return response()->json([
                    'status'=> 201,
                    'message'=> 'Kosárba helyezve',
                ]);
            }


        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message'=> 'A termék nem található',
            ]);
        }



    }
    else
    {
        return response()->json([
            'status'=> 401,
            'message'=> 'Jelentkezzen be a kosárba helyezés előtt',
        ]);
    }
   }

   public function viewcart()
   {
    if(auth('sanctum')->check())
    {
        $user_id = auth('sanctum')->user()->id;
        $cartitems = Cart::where('user_id', $user_id)->get();
        return response()->json([
            'status'=> 200,
            'cart'=> $cartitems,
        ]);
    }
    else
    {
        return response()->json([
            'status'=> 401,
            'message'=> 'Jelentkezzen be a kosár megtekintéséhez',
        ]);
    }
   }

   public function updatequantity($cart_id, $scope)
   {
        if(auth('sanctum')->check())
        {
            $user_id = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            if($scope == "inc")
            {
                $cartitem->product_quantity += 1;
            }else if($scope == "dec"){
                $cartitem->product_quantity -= 1;
            }
            $cartitem->update();
            return response()->json([
                'status'=> 200,
                'message'=> 'Mennyiség feltöltve',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 401,
                'message'=> 'Jelentkezzen be folytatáshoz',
            ]);
        }
   }

   public function deleteCartItem($cart_id)
   {
     if(auth('sanctum')->check())
     {
            $user_id = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            if($cartitem)
            {
                $cartitem->delete();
                return response()->json([
                    'status'=> 200,
                    'message'=> 'A kosárban lévő termék sikeresen törölve',
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 404,
                    'message'=> 'A kosárban lévő termék nem található',
                ]);
            }
     }
     else
     {
         return response()->json([
             'status'=> 401,
             'message'=> 'Jelentkezzen be folytatáshoz',
         ]);
     }


   }

}
