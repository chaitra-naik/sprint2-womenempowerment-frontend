import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSchemeIdComponent } from './get-scheme-id.component';

describe('GetSchemeIdComponent', () => {
  let component: GetSchemeIdComponent;
  let fixture: ComponentFixture<GetSchemeIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSchemeIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSchemeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
