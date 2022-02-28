<?php

use App\Http\Controllers\API\IdeaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('ideas', [IdeaController::class, 'index']);
Route::post('/add-idea', [IdeaController::class, 'store']);
Route::post('/approuve-idea', [IdeaController::class, 'approuve']);
Route::post('/update-idea', [IdeaController::class, 'update']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
