import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// Importaciones para Highlightjs
// import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
// import { HighlightModule } from 'ngx-highlightjs';
// import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-dev-notes',
  templateUrl: './dev-notes.component.html',
  styleUrls: ['./dev-notes.component.css','./dev-notes.component.scss'],
  // standalone:true,
  // imports: [
  //   HighlightModule
  // ],
  // providers: [
  //   {
  //     provide: HIGHLIGHT_OPTIONS,
  //     useValue: {
  //       fullLibraryLoader: () => import('highlight.js'),
  //       lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // verifica si realmente es necesario
  //       lineNumbers: true
  //     }
  //   },

  // ],
})
export class DevNotesComponent implements OnInit {
  code: string = "";
  codehtml:string = ""

  constructor(private router: Router) { }

  codeForHighlight = `export class SuperUser {
    name: string;

    contructor(name: string) {
      this.name = name;
    }
  }`;

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

  // Vuejs
  newProjectVuejs = `  npm create vite@latest name_project
  cd project_name
  npm install
  npm run dev `
  formKit = `  npm i @formkit/vue
  npm i @formkit/themes`
  tailwindforms = `npm i -D @tailwindcss/forms`
  firebase = `npm install firebase vuefire`
  randomName = `npm i uid`

  // PHP
    //  Laravel
    newProjectLaravel = `  composer create-project laravel/laravel project_name "10.*"
  php artisan serve
  `
    newModuleLaravel = `php artisan make:model path/to/newModule`
    newControllerLaravel = `php artisan make:controller path/to/newController`
    laravelFreeze = `composer require laravel/breeze --dev`
    // Python
  newProjectFlask = `flask --app nameFile --debug run`
  orderList = `  from collections import deque
  tareas.sort()
  cola = deque()
  for tarea in tareas:
      cola.append(tarea[1])`

  dequeExample = `  from collections import deque
  tareas.sort()
  print("==Tareas ordenadas==")
  for tarea in tareas:
      print(tarea[1])`

  formatExample = `  v = "otro texto"
  n = 10
  print( "Un texto '{1}' y un número '{0}'".format(v,n) )`

  argsWord = `  def super_funcion(*args,**kwargs):
  t = 0
  for arg in args:
      t += arg
      print(f"Sumatorio indeterminado es = {t}")

  for kwarg in kwargs:
      print(f"{kwarg} = {kwargs[kwarg]}")`

  privateAttributesMethods = `class Ejemplo:
    __atributo_privado = "Soy un atributo inalcanzable desde fuera"
    def __metodo_privado(self):
        print("Soy un metodo inalcanzable desde fuera")
    def get_atributo_publico(self):
        return self.__atributo_privado
    def get_metodo_publico(self):
        return self.__metodo_privado()`

  copyVariable = `import copy
copia_variable = copy.copy(valoriable_copiar)
`
  // Docker
  createNetwork = `docker network create name_network`
  dockerComposeUp = `docker compose -f .\docker\docker-compose.dev.yml up --build`
  dockerComposeDown = `docker compose -f .\docker\docker-compose.dev.yml down`

  sizeVolumn = `docker run –rm -v nameVolume:/mnt alpine sh “du -sh /mnt”`
  checkNetwork = `docker network connect red_name container_id`
  connectToNetwork = `docker network inspect world-app`

  fullDockerContainer = `  docker container run
  -dp 3306:3306
  --name world-db
  --env MARIADB_USER=example-user
  --env MARIADB_PASSWORD=user-password
  --env MARIADB_ROOT_PASSWORD=root-secret-password
  --env MARIADB_DATABASE=world-db
  --volume world-db:/var/lib/mysql
  mariadb:jammy`

  // Entorno virtual
  newVirtualEnviroment = `py -3 -m venv .venv`
  activateVirtualEnviroment = `.venv\Scripts\activate`
  listVirtualEnviroment = `pip list`
  createRequirementsFile = `pip freeze > requirements.txt`

  ngOnInit(): void{
    // this.code = "body: {color: red;}"
    // this.codehtml = "!DOCTYPE html\n"+
    //             "<html>\n"+
    //               "<body><h2>Hola Mundo</h2></body>\n"+
    //             "</html>"

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const hashIndex = url.indexOf('#');
        if (hashIndex === -1) {
          // No hash, scroll to top
          window.scrollTo(0, 0);
        } else {
          // Hash present, scroll to the element with that ID
          const hash = url.substring(hashIndex + 1);
          this.scrollToElement(hash);
        }
      }
    });
  }

  private scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
