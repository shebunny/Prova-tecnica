<?php

namespace App\Http\Controllers;

use Request;
use App\Models\Bolsista;

class BolsistasController extends Controller
{
    // carrega o view de listagem de bolsistas
    public function show()
    {
        $b = Bolsista::get();
        return view('show_bolsistas',['bolsistas'=>$b]);
    }

    // cadastrar bolsista
    public function store(){
        Bolsista::create(['nome'=> Request::all()['nome'],
        'email'=> Request::all()['email'],
        'cpf'=> Request::all()['cpf'],
        'funcao'=> Request::all()['funcao'],
        'status_projeto'=> Request::all()['status_projeto']
        ]);
        return redirect('/');
    }

    // deletar bolsista
    public function del(){
        $b = Bolsista::findOrfail(Request::all()['id']);
        $b->delete();
        
        return redirect('/');
    }

}
