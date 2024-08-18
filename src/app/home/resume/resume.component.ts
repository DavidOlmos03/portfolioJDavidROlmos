import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [
    trigger('zoomInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px) scale(0.5)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class ResumeComponent implements OnInit {
  themeSelected:any = ''

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // this.themeSelected = 'dark'
    // console.log(this.themeSelected)
    this.themeService.themeSelected$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }


}
