<?php

namespace App\Http\Controllers\API;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   //a felhasználó megtekintése
   public function index()
   {
       $user= User::all();
       return response()->json([
           'status'=>200,
           'user'=>$user,
       ]);
   }

   //Összes kategória
   public function allUser()
   {
       $user = User::where('role_as', '0')->get();
       return response()->json([
           'status'=>200,
           'user'=>$user,
       ]);
   }

   //a kategória szerkesztése
   public function edit($id)
   {
       $user = User::find($id);
       if($user)
       {
           return response()->json([
               'status'=>200,
               'user'=>$user,
           ]);

       }
       else
       {
           return response()->json([
               'status'=>400,
               'message'=>'A felhasználó azonosító nem található',
           ]);

       }

   }


//A felhasználók rögzítése
  public function store(Request $request)
  {
       $validator = Validator::make($request->all(),[
           'name'=>'required|max:191',
           'email' =>'required|max:191',
           'password' =>'required|min:8',

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
       $user = new User;
       $user-> name = $request->input('name');
       $user-> email = $request->input('email');
       $user->password = Hash::make($request->password);
       $user -> role_as = $request->input('role_as') == true ? '1':'0';
       $user->save();
       return response()->json([

           'status'=> 200,
           'message' => 'A felhasználó sikeresen hozzáadva',
       ]);
   }

  }
  //Felhasználó feltöltése
  public function update(Request $request, $id)
  {

   $validator = Validator::make($request->all(),[
       'name'=>'required|max:191',
       'email' =>'required|max:191',


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
   $user = User::find($id);

   if ($user)
   {
   $user-> name = $request->input('name');
   $user-> email = $request->input('email');
   $user -> role_as = $request->input('role_as') == true ? '1':'0';
   $user->save();
   return response()->json([

       'status'=> 200,
       'message' => 'A felhasználó sikeresen feltöltve',
   ]);
   }
   else
   {
       return response()->json([

           'status'=> 404,
           'message' => 'A felhasználó azonosító nem található',
       ]);
   }


}



  }
  //Felhasználó törlése
  public function destroy($id)
  {
   $user= User::find($id);
   if($user)
   {
       $user->delete();
       return response()->json([

           'status'=> 200,
           'message' => 'A felhasználó sikeresen törölve',
       ]);

   }
   else
   {
       return response()->json([

           'status'=> 404,
           'message' => 'A felhasználó azonosító nem található',
       ]);
   }


  }
}
