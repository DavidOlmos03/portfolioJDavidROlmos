import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-dev-notes',
  templateUrl: './dev-notes.component.html',
  styleUrls: ['./dev-notes.component.css'],
  standalone:true,
  imports: [
    HighlightModule
  ]
})
export class DevNotesComponent {
  code: string = "";
  codehtml:string = ""

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
