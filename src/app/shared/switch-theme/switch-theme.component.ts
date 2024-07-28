import { Component, Inject,OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.css']
})
export class SwitchThemeComponent implements OnInit {
  isDarkThemeActive:any = false
  themeSelected:any = ''
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeSelected$.subscribe(theme => {
      this.themeSelected = theme;
    });
    this.themeSelected = localStorage.getItem('theme-selected')
    if(this.themeSelected == 'dark'){
      this.document.body.classList.add('dark-mode');
    }else{
      this.document.body.classList.remove('dark-mode');
    }
    if (this.themeSelected !== null) {
      this.isDarkThemeActive = this.themeSelected === 'dark';
    }
  }
  onChange(newValue:boolean):void {
    if (newValue) {
      this.themeSelected = 'dark'
      this.document.body.classList.add('dark-mode');
      this.themeService.setThemeSelected('dark');
      localStorage.setItem('theme-selected',this.themeSelected)
    } else {
      this.themeSelected = 'light'
      this.document.body.classList.remove('dark-mode');
      this.themeService.setThemeSelected('light');
      localStorage.setItem('theme-selected',this.themeSelected)
    }
  }
}
