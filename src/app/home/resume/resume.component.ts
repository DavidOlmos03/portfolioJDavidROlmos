import { ThemeService } from './../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  themeSelected:any = ''

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeSelected$.subscribe(theme => {
      this.themeSelected = theme;
    });
  }
}
