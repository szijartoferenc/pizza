<?php

namespace App\Http\Controllers\API;
use App\Models\Category;
use App\Models\Product;
use App\Models\Attribute;
use App\Models\Attributevalue;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
   public function category()
   {
     $category = Category::where('status','0')->get();
     return response()->json([
         'status'=>200,
         'category'=>$category,
     ]);
   }

   public function product($slug)
   {
        $category = Category::where('slug', $slug)->where('status','0')->first();
        if($category)
        {
            $product = Product::where('category_id', $category->id)->where('status','0')->get();
            if($product)
            {
                return response()->json([
                    'status'=>200,
                    'product_data'=>[
                        'product'=>$product,
                        'category'=>$category,
                    ],
                ]);
            }
            else
            {
                return response()->json([
                    'status'=>400,
                    'message'=>'Termék nem található',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status'=>404,
                'message'=>'Ilyen kategória nem található',
            ]);

        }

   }

   //attributum  megjelenítése
   public function attribute()
   {
     $attribute = Attribute::where('status','0')->get();
     return response()->json([
         'status'=>200,
         'attribute'=>$attribute,
     ]);
   }

    public function attributevalue($slug)
   {
        $attribute = Attribute::where('slug', $slug)->where('status','0')->first();
        if($attribute)
        {
            $attributevalue = Attributevalue::where('attribute_id', $attribute->id)->where('status','0')->get();
            if($attributevalue)
            {
                return response()->json([
                    'status'=>200,
                    'attributevalue_data'=>[
                        'attributevalue'=>$attributevalue,
                        'attribute'=>$attribute,
                    ],
                ]);
            }
            else
            {
                return response()->json([
                    'status'=>400,
                    'message'=>'Termék nem található',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status'=>404,
                'message'=>'Ilyen kategória nem található',
            ]);

        }

   }

    //termék megjelenítése
   public function viewproduct ($category_slug, $product_slug)
   {
    $category = Category::where('slug', $category_slug)->where('status','0')->first();
    if($category)
    {
        $product = Product::where('category_id', $category->id)
                          ->where('slug',$product_slug)
                          ->where('status','0')
                          ->first();
        if($product)
        {
            return response()->json([
                'status'=>200,
                'product'=>$product,

            ]);
        }
        else
        {
            return response()->json([
                'status'=>400,
                'message'=>'Termék nem elérhető',
            ]);
        }
    }
    else
    {
        return response()->json([
            'status'=>404,
            'message'=>'Ilyen kategória nem található',
        ]);

    }

   }
}
