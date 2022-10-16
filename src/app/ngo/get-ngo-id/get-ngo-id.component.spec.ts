import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNgoIdComponent } from './get-ngo-id.component';

describe('GetNgoIdComponent', () => {
  let component: GetNgoIdComponent;
  let fixture: ComponentFixture<GetNgoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNgoIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNgoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
