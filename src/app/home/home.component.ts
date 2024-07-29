import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template:  `
  <h1>Home Component</h1>
  <app-switch-languages></app-switch-languages> <!-- Utiliza el selector correcto -->
`,
//
  styleUrls: ['./home.component.css',"home/css/johndoe.css"]
})
export class HomeComponent {
  isDarkThemeActive:any;
  themeSelected: any = '';



  constructor(
    private translate:TranslateService,
    private themeService: ThemeService
  ){
    this.translate.addLangs(['en','es']);
    const lang = this.translate.getBrowserLang();
    if(lang !== 'en' && lang !== 'es'){
      this.translate.setDefaultLang('en');
    }else{
      this.translate.use(lang);
    }
  }

  ngOnInit(): void {
    // Leer el valor de themeSelected del localStorage
    const themeSelected = localStorage.getItem('theme-selected');
    // console.log(themeSelected)
    if (themeSelected !== null) {
      if (themeSelected === 'dark') {
        this.isDarkThemeActive = 'dark';
      } else {
        this.isDarkThemeActive = 'light';
      }
    }
    this.themeService.themeSelected$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }

}
