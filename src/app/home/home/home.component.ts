import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template:  `
  <h1>Home Component</h1>
  <app-switch-languages></app-switch-languages> <!-- Utiliza el selector correcto -->
`,
  styleUrls: ['./home.component.css',"css/johndoe.css","./vendors/themify-icons/css/themify-icons.css"]
})
export class HomeComponent {

  constructor(private translate:TranslateService){
    this.translate.addLangs(['en','es']);
    const lang = this.translate.getBrowserLang();
    if(lang !== 'en' && lang !== 'es'){
      this.translate.setDefaultLang('en');
    }else{
      this.translate.use(lang);
    }
  }
}
