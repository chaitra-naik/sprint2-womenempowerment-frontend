import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingcourseComponent } from './add-trainingcourse.component';

describe('AddTrainingcourseComponent', () => {
  let component: AddTrainingcourseComponent;
  let fixture: ComponentFixture<AddTrainingcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainingcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainingcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
