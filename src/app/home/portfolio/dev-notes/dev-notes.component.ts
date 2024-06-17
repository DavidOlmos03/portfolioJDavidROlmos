import { Component } from '@angular/core';

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
export class DevNotesComponent {
  code: string = "";
  codehtml:string = ""
  codeForHighlight = `export class SuperUser {
    name: string;

    contructor(name: string) {
      this.name = name;
    }
  }`;

  ngOnInit(){
    this.code = "body: {color: red;}"
    this.codehtml = "!DOCTYPE html\n"+
                "<html>\n"+
                  "<body><h2>Hola Mundo</h2></body>\n"+
                "</html>"

                // body;
                //     h1;¡Bienvenido!/h1;
                //     p;Este es un párrafo en mi página web./p;
                // /body;
                // /html;"
  }
}
