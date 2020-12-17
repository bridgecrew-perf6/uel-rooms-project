import { TestBed } from '@angular/core/testing';

import { CourseRecommendationsService } from './course-recommendations.service';

describe('CourseRecommendationsService', () => {
  let service: CourseRecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseRecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
