import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursejsComponent } from './coursejs.component';

describe('CoursejsComponent', () => {
  let component: CoursejsComponent;
  let fixture: ComponentFixture<CoursejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursejsComponent]
    });
    fixture = TestBed.createComponent(CoursejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
