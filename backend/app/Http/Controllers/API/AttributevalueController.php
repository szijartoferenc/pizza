<?php

namespace App\Http\Controllers\API;
use App\Models\Attributevalue;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AttributevalueController extends Controller
{
     //a termékek megtekintése
     public function index()
     {
         $attributevalue = Attributevalue::all();
         return response()->json([
             'status'=>200,
             'attributevalue'=>$attributevalue,
         ]);
     }



     //a termékek hozzáadása
     public function store(Request $request)
     {
         $validator = Validator::make($request->all(),[
             'attribute_id'=>'required|max:191',
             'slug'=>'required|max:191',
             'name'=>'required|max:191',


         ]);

         if($validator->fails())
         {
             return response()->json([
                 'status'=>422,
                 'errors'=>$validator->messages(),
             ]);
         }
         else
         {
             $attributevalue = new Attributevalue;
             $attributevalue->attribute_id = $request->input('attribute_id');
             $attributevalue->slug = $request->input('slug');
             $attributevalue->name = $request->input('name');
             $attributevalue->status = $request->input('status')== true ? '1':'0';
             $attributevalue-> save();

             return response()->json([
                 'status'=>200,
                 'message'=>'A termék sikeresen feltöltve',
             ]);
         }


     }



  //a termékek szerkesztése
     public function edit($id)
     {
         $attributevalue = Attributevalue::find($id);
         if($attributevalue)
         {
             return response()->json([
                 'status'=>200,
                 'attributevalue'=>$attributevalue,
             ]);

         }
         else
         {
             return response()->json([
                 'status'=>404,
                 'message'=>'Az attributum érték nem található',
             ]);
         }
     }

     //a termékek feltöltése
     public function update(Request $request, $id)
     {
         $validator = Validator::make($request->all(),[
             'attribute_id'=>'required|max:191',
             'slug'=>'required|max:191',
             'name'=>'required|max:191',


         ]);

         if($validator->fails())
         {
             return response()->json([
                 'status'=>422,
                 'errors'=>$validator->messages(),
             ]);
         }
         else
         {
             $attributevalue =  Attributevalue::find($id);
             if($attributevalue)
             {
                 $attributevalue->attribute_id = $request->input('attribute_id');
                 $attributevalue->slug = $request->input('slug');
                 $attributevalue->name = $request->input('name');
                 $attributevalue->status = $request->input('status');
                 $attributevalue->update();

                 return response()->json([
                     'status'=>200,
                     'message'=>'Az attributum érték sikeresen feltöltve',
                 ]);

             }
             else
             {
              return response()->json([
              'status'=>404,
              'message'=>'Az attributum érték nem található',
              ]);

             }

         }




     }
}
