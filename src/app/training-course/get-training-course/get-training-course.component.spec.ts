import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrainingCourseComponent } from './get-training-course.component';

describe('GetTrainingCourseComponent', () => {
  let component: GetTrainingCourseComponent;
  let fixture: ComponentFixture<GetTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTrainingCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
