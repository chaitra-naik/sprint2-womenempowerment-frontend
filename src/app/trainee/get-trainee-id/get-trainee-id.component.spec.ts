import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTraineeIdComponent } from './get-trainee-id.component';

describe('GetTraineeIdComponent', () => {
  let component: GetTraineeIdComponent;
  let fixture: ComponentFixture<GetTraineeIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTraineeIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTraineeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
