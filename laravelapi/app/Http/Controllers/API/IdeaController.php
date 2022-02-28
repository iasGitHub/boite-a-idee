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
            'message'=>'idée insérée avec succes',
        ]);
    }

    public function approuve ($id) {
        $idea = Idea::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$idea,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'titre'=>'required|max:191',
            'desc'=>'required|max:191',
            'statut'=>'required|email|max:191',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=> 422,
                'validationErrors'=> $validator->messages(),
            ]);
        }
        else
        {
            $idea = Idea::find($id);
            if($idea)
            {
                $idea->statut = true;
                $idea->update();

                return response()->json([
                    'status'=> 200,
                    'message'=>'Idea Updated Successfully',
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 404,
                    'message' => 'No idea ID Found',
                ]);
            }
        }
    }
   
}
