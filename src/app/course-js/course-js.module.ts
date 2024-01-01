import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursejsComponent } from './coursejs/coursejs.component';



@NgModule({
  declarations: [
    CoursejsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursejsComponent],
  //declarations: [CoursejsComponent]
})
export class CourseJSModule { }
