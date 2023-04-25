<?php

namespace App\Http\Controllers\API;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    //a kategória megtekintése
    public function index()
    {
        $category = Category::all();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    //Összes kategória
    public function allCategory()
    {
        $category = Category::where('status', '0')->get();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }

    //a kategória szerkesztése
    public function edit($id)
    {
        $category = Category::find($id);
        if($category)
        {
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);

        }
        else
        {
            return response()->json([
                'status'=>400,
                'message'=>'A kategória azonosító nem található',
            ]);

        }

    }


 //A kategóriák rögzítése
   public function store(Request $request)
   {
        $validator = Validator::make($request->all(),[
            'meta_title'=>'required|max:191',
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
        $category = new Category;
        $category-> meta_title = $request->input('meta_title');
        $category-> meta_keyword = $request->input('meta_keyword');
        $category-> meta_description = $request->input('meta_description');
        $category-> slug = $request->input('slug');
        $category-> name = $request->input('name');
        $category->description = $request->input('description');
        $category -> status = $request->input('status') == true ? '1':'0';
        $category->save();
        return response()->json([

            'status'=> 200,
            'message' => 'A kategória sikeresen hozzáadva',
        ]);
    }

   }
   //Kategória feltöltése
   public function update(Request $request, $id)
   {

    $validator = Validator::make($request->all(),[
        'meta_title'=>'required|max:191',
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
    $category = Category::find($id);

    if ($category)
    {
    $category-> meta_title = $request->input('meta_title');
    $category-> meta_keyword = $request->input('meta_keyword');
    $category-> meta_description = $request->input('meta_description');
    $category-> slug = $request->input('slug');
    $category-> name = $request->input('name');
    $category->description = $request->input('description');
    $category -> status = $request->input('status') == true ? '1':'0';
    $category->save();
    return response()->json([

        'status'=> 200,
        'message' => 'A kategória sikeresen feltöltve',
    ]);
    }
    else
    {
        return response()->json([

            'status'=> 404,
            'message' => 'A kategória azonosító nem található',
        ]);
    }


}



   }
   //Kategória törlése
   public function destroy($id)
   {
    $category= Category::find($id);
    if($category)
    {
        $category->delete();
        return response()->json([

            'status'=> 200,
            'message' => 'A kategória sikeresen törölve',
        ]);

    }
    else
    {
        return response()->json([

            'status'=> 404,
            'message' => 'A kategória azonosító nem található',
        ]);
    }


   }

}
