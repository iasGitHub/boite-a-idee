<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Idea;


class IdeaController extends Controller
{

    public function index()
    {
        $ideas = Idea::all();

        return response()->json([
            'status'=>200,
            'ideas'=>$ideas,
        ]);
    }

    public function store (Request $request) {
        $idea = new Idea;
        $idea->titre = $request->input('titre');
        $idea->desc = $request->input('desc');
        $idea->statut = false;
        $idea->save(); 

        return response()->json([
            'status'=>200,
            'message'=>'idée insérée avce succes',
        ]);
    }
}
