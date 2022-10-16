import { TestBed } from '@angular/core/testing';

import { TrainingcourseService } from './trainingcourse.service';

describe('TrainingcourseService', () => {
  let service: TrainingcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
