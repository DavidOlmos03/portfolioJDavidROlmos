import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDay3Component } from './project-day3.component';

describe('ProjectDay3Component', () => {
  let component: ProjectDay3Component;
  let fixture: ComponentFixture<ProjectDay3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDay3Component]
    });
    fixture = TestBed.createComponent(ProjectDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
