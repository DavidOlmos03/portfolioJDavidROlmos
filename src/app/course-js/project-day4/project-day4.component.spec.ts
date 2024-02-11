import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDay4Component } from './project-day4.component';

describe('ProjectDay4Component', () => {
  let component: ProjectDay4Component;
  let fixture: ComponentFixture<ProjectDay4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDay4Component]
    });
    fixture = TestBed.createComponent(ProjectDay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
