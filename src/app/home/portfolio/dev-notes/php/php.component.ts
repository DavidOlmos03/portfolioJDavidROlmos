import { Component } from '@angular/core';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent {
  // PHP
    //  Laravel
    newProjectLaravel = `  composer create-project laravel/laravel project_name "10.*"
  php artisan serve
  `
    newModuleLaravel = `php artisan make:model path/to/newModule`
    newControllerLaravel = `php artisan make:controller path/to/newController`
    laravelFreeze = `composer require laravel/breeze --dev`
}
