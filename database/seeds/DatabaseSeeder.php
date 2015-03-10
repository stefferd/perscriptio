<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Perscriptio\User;
use Perscriptio\Project;
use Perscriptio\Company;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		User::truncate();
		Project::truncate();
		Company::truncate();
		Model::unguard();

		$this->call('UserTableSeeder');
		$this->call('ProjectTableSeeder');
		$this->call('CompanyTableSeeder');
	}

}
