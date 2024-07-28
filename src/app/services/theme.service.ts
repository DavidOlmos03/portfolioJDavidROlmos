import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSelectedSubject = new BehaviorSubject<any>(''); // Inicializa con un valor por defecto
  themeSelected$ = this.themeSelectedSubject.asObservable();

  themeSelectedStorage = localStorage.getItem('theme-selected');

  setThemeSelected(value: any) {
    this.themeSelectedSubject.next(value);
  }

  getThemeSelected() {
    return this.themeSelectedSubject.value;
  }
}
