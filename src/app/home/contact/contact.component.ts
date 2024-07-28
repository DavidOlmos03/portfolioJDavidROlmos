import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',"../home/css/johndoe.css"]
})
export class ContactComponent implements OnInit {
  isDarkThemeActive:any;
  themeSelected: any = '';

  constructor(private themeService: ThemeService) {}
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
