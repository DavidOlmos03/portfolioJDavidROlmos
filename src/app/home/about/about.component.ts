import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('zoomInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px) scale(0.5)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class AboutComponent {

}
