<?php


use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Http\Controllers\BolsistasController;
 

Route::get('/', [BolsistasController::class, 'show']);
Route::post('/create', [BolsistasController::class, 'store'])->name('cadastrar_bolsista');
Route::post('/delete', [BolsistasController::class, 'del'])->name('remover_bolsista');
