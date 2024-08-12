import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-c',
  templateUrl: './angular-c.component.html',
  styleUrls: ['./angular-c.component.css']
})
export class AngularCComponent {


    // Angular
    newProjectAngular = `ng new path/to/new_project`
    newServiceAngular = `ng g s path/to/new_service --skip-tests`
    newModuleAngular = `ng generate module path/to/new_module`
    newModuleAngularWithRouting = `ng g m path/to/new_module --routing`
    newComponentAngular = `ng generate component path/to/new_component`
    newComponentAngularWithoutSpect = `ng g c path/to/new_component --skip-tests`
    signErrorAngular = `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
    deployGitHubAngular = `ng build --output-path docs --base-href=https://example.github.io/project_name/`
    deployNetlifyAngular = `npm run build`


     //  Laravel
     newProjectLaravel = `  composer create-project laravel/laravel project_name "10.*"
     php artisan serve
     `
       newModuleLaravel = `php artisan make:model path/to/newModule`
       newControllerLaravel = `php artisan make:controller path/to/newController`
       laravelFreeze = `composer require laravel/breeze --dev`
}
