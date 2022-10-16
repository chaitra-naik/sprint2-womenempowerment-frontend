import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingcourseComponent } from './update-trainingcourse.component';

describe('UpdateTrainingcourseComponent', () => {
  let component: UpdateTrainingcourseComponent;
  let fixture: ComponentFixture<UpdateTrainingcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainingcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainingcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
