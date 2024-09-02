import { Component } from '@angular/core';

@Component({
  selector: 'app-vuejs',
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.css','../dev-notes.component.css']
})
export class VuejsComponent {
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
}
