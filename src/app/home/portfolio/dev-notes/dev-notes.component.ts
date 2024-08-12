import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dev-notes',
  templateUrl: './dev-notes.component.html',
  styleUrls: ['./dev-notes.component.css','./dev-notes.component.scss'],
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


  ngOnInit(): void{
    // Llevar al inicio de la página cuando vengo desde home
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
