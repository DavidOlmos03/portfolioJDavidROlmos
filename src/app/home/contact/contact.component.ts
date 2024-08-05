import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Para el form de contacto
  contactForm: FormGroup;
  isContactFormSubmitted = false;


  isDarkThemeActive:any;
  themeSelected: any = '';

  constructor(private themeService: ThemeService,private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      body: new FormControl(''),
    });
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

    // Para el formulario

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      body: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(evt: SubmitEvent) {
    evt.preventDefault();


    const formData = this.contactForm.value;
    // This is important. We need to add the hidden field to make sure Netlify picks up the form submission.
    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
      });
  }

  // functions used in the html template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get body() {
    return this.contactForm.get('body');
  }
}
