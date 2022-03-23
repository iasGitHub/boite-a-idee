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

    public function changeStatus ($id) {

        $get_idea_to_change = Idea::find($id);

        if($get_idea_to_change->statut)
        {
            $get_idea_to_change->update(["statut" => 1]);
        }else
        {
            $get_idea_to_change->update(["statut" => 0]);
        }

        return response()->json([
            'status'=>200,
            'message'=>'statut modifié avce succes',
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
