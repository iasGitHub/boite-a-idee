<?php

use App\Http\Controllers\API\IdeaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('ideas', [IdeaController::class, 'index']);
Route::post('/add-idea', [IdeaController::class, 'store']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
