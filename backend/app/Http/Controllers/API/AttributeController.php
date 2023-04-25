<?php

namespace App\Http\Controllers\API;
use App\Models\Attribute;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AttributeController extends Controller
{
    public function index()
    {
        $attribute = Attribute::all();
        return response()->json([
            'status'=>200,
            'attribute'=>$attribute,
        ]);
    }

    //Összes kategória
    public function allAttribute()
    {
        $attribute = Attribute::where('status', '0')->get();
        return response()->json([
            'status'=>200,
            'attribute'=>$attribute,
        ]);
    }

    //a kategória szerkesztése
    public function edit($id)
    {
        $attribute = Attribute::find($id);
        if($attribute)
        {
            return response()->json([
                'status'=>200,
                'attribute'=>$attribute,
            ]);

        }
        else
        {
            return response()->json([
                'status'=>400,
                'message'=>'Az attributum azonosító nem található',
            ]);

        }

    }


 //A kategóriák rögzítése
   public function store(Request $request)
   {
        $validator = Validator::make($request->all(),[
            'slug' =>'required|max:191',
            'name' =>'required|max:191',

        ]);
        if($validator->fails())
        {
            return response()->json([

                'status'=> 400,
                'errors' => $validator->messages(),

            ]);
        }

        else
        {
        $attribute = new Attribute;
        $attribute-> slug = $request->input('slug');
        $attribute-> name = $request->input('name');
        $attribute -> status = $request->input('status') == true ? '1':'0';
        $attribute->save();
        return response()->json([

            'status'=> 200,
            'message' => 'Az attributum sikeresen hozzáadva',
        ]);
    }

   }
   //Kategória feltöltése
   public function update(Request $request, $id)
   {

    $validator = Validator::make($request->all(),[
        'slug' =>'required|max:191',
        'name' =>'required|max:191',

    ]);
    if($validator->fails())
    {
        return response()->json([

            'status'=> 422,
            'errors' => $validator->messages(),

        ]);
    }

    else
    {
    $attribute = Attribute::find($id);

    if ($attribute)
    {
        $attribute-> slug = $request->input('slug');
        $attribute-> name = $request->input('name');
        $attribute -> status = $request->input('status') == true ? '1':'0';
        $attribute->save();
        return response()->json([

            'status'=> 200,
            'message' => 'Az attributum sikeresen feltöltve',
    ]);
    }
    else
    {
        return response()->json([

            'status'=> 404,
            'message' => 'Az attributum azonosító nem található',
        ]);
    }


}



   }
   //Kategória törlése
   public function destroy($id)
   {
    $attribute= Attribute::find($id);
    if($attribute)
    {
        $attribute->delete();
        return response()->json([

            'status'=> 200,
            'message' => 'Az attributum sikeresen törölve',
        ]);

    }
    else
    {
        return response()->json([

            'status'=> 404,
            'message' => 'Az attributum azonosító nem található',
        ]);
    }


   }
}
