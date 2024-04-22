import { Component } from '@angular/core';


declare function PROJECT_DAY3():any;

@Component({
  selector: 'app-project-day3',
  templateUrl: './project-day3.component.html',
  styleUrls: ['./project-day3.component.css']
})
export class ProjectDay3Component {
  constructor(){

  }

  ngOnInit():void{
    setTimeout(()=>{
      PROJECT_DAY3();
    },50);
  }
}
