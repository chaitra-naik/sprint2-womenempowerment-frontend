import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainingcourseIdComponent } from './get-trainingcourse-id.component';

describe('GetTrainingcourseIdComponent', () => {
  let component: GetTrainingcourseIdComponent;
  let fixture: ComponentFixture<GetTrainingcourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTrainingcourseIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTrainingcourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
