import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursejsComponent } from './coursejs/coursejs.component';
import { ProjectDay3Component } from './project-day3/project-day3.component';
import { ProjectDay4Component } from './project-day4/project-day4.component';



@NgModule({
  declarations: [
    CoursejsComponent,
    ProjectDay3Component,
    ProjectDay4Component
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursejsComponent],
  //declarations: [CoursejsComponent]
})
export class CourseJSModule { }
