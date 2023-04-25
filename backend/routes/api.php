<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\AttributeController;
use App\Http\Controllers\API\AttributevalueController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\OrderitemController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CheckoutController;
use App\Http\Controllers\API\FrontendController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('getCategory', [FrontendController::class, 'category']);
Route::get('fetchproducts/{slug}', [FrontendController::class, 'product']);
Route::get('getAttribute', [FrontendController::class, 'attribute']);
Route::get('fetchattributevalues/{slug}', [FrontendController::class, 'attributevalue']);
Route::get('viewproductdetail/{category_slug}/{product_slug}', [FrontendController::class, 'viewproduct']);

Route::post('add-to-cart', [CartController::class, 'addtocart']);
Route::get('cart', [CartController::class, 'viewcart']);
Route::put('cart-updatequantity/{cart_id}/{scope}', [CartController::class, 'updatequantity']);
Route::delete('delete-cartitem/{cart_id}', [CartController::class, 'deleteCartitem']);

Route::post('validate-order', [CheckoutController::class, 'validateOrder']);
Route::post('place-order', [CheckoutController::class, 'placeorder']);

Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function() {

    Route::get('/checkingAuthenticated', function (){
     return response()->json(['message'=> 'Be van jelentkezve', 'status'=>200], 200);
    });

    // //Category
    Route::get('view-category', [CategoryController::class, 'index']);
    Route::post('store-category', [CategoryController::class, 'store']);
    Route::get('edit-category/{id}', [CategoryController::class, 'edit']);
    Route::put('update-category/{id}', [CategoryController::class, 'update']);
    Route::delete('delete-category/{id}', [CategoryController::class, 'destroy']);
    Route::get('all-category', [CategoryController::class, 'allcategory']);

    //Megrendelés
    Route::get('admin/orders', [OrderController::class, 'index']);
    Route::get('admin/view-orders', [OrderitemController::class, 'index']);

    //Felhasználó
    Route::post('store-profile', [UserController::class, 'store']);
    Route::get('view-profile', [UserController::class, 'index']);
    Route::get('edit-profile/{id}', [UserController::class, 'edit']);
    Route::put('update-profile/{id}', [UserController::class, 'update']);
    Route::delete('delete-profile/{id}', [UserController::class, 'destroy']);
    Route::get('all-user', [UserController::class, 'alluser']);

    //Termékek
    Route::post('store-product', [ProductController::class, 'store']);
    Route::get('view-product', [ProductController::class, 'index']);
    Route::get('edit-product/{id}', [ProductController::class, 'edit']);
    Route::post('update-product/{id}', [ProductController::class, 'update']);

    //Attributum név
    Route::get('view-attribute', [AttributeController::class, 'index']);
    Route::post('store-attribute', [AttributeController::class, 'store']);
    Route::get('edit-attribute/{id}', [AttributeController::class, 'edit']);
    Route::put('update-attribute/{id}', [AttributeController::class, 'update']);
    Route::delete('delete-attribute/{id}', [AttributeController::class, 'destroy']);
    Route::get('all-attribute', [AttributeController::class, 'allattribute']);

     //Attributum érték
    Route::post('store-attributevalue', [AttributevalueController::class, 'store']);
    Route::get('view-attributevalue', [AttributevalueController::class, 'index']);
    Route::get('edit-attributevalue/{id}', [AttributevalueController::class, 'edit']);
    Route::post('update-attributevalue/{id}', [AttributevalueController::class, 'update']);
});

Route::middleware(['auth:sanctum'])->group(function() {

    Route::post('logout', [AuthController::class, 'logout']);

    });

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
