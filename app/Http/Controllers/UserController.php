<?php namespace Perscriptio\Http\Controllers;

use Auth;
use Hash;
use Perscriptio\Http\Requests;
use Perscriptio\Http\Controllers\Controller;
use Perscriptio\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$user = User::all();
		return $user;
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	public function login(Request $request) {
		dd($request);
		if (Auth::attempt(['email' => $request->input('email'), 'password' => Hash::make($request->input('password'))])) {
			$user = Auth::getUser();
			$response = array(
				'operation' => true,
				'message' => 'Login successfull',
				'user' => array(
					'name' => $user->name,
					'role' => $user->groups
				)
			);
			return Response::create(json_encode($response , 200));
		}
		$response = array(
			'operation' => false,
			'message' => 'Username and password not correct'
		);
		return Response::create(json_encode($response), 401);
	}

	public function logout() {
		Auth::logout();
		$response = array(
			'operation' => true,
			'message' => 'Logout succesfull'
		);
		return Response::create(json_encode($response), 200);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
