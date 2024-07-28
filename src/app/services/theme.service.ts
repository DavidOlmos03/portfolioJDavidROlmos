import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  initialTheme:any = localStorage.getItem('theme-selected')

  private themeSelectedSubject = new BehaviorSubject<any>(
    this.initialTheme ? this.initialTheme : 'light'
    ); // Inicializa con un valor por defecto
  themeSelected$ = this.themeSelectedSubject.asObservable();

  themeSelectedStorage = localStorage.getItem('theme-selected');

  setThemeSelected(value: any) {
    this.themeSelectedSubject.next(value);
  }

  getThemeSelected() {
    return this.themeSelectedSubject.value;
  }
}
