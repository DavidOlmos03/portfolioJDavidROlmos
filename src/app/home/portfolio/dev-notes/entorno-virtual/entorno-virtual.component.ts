import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno-virtual',
  templateUrl: './entorno-virtual.component.html',
  styleUrls: ['./entorno-virtual.component.css','../dev-notes.component.css']
})
export class EntornoVirtualComponent {
  // Entorno virtual
  newVirtualEnviroment = `py -3 -m venv .venv`
  activateVirtualEnviroment = `.venv\Scripts\activate`
  listVirtualEnviroment = `pip list`
  createRequirementsFile = `pip freeze > requirements.txt`
}
