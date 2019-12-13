import { TestBed } from '@angular/core/testing';

import { ContributorReviewsService } from './contributor-reviews.service';

describe('ContributorReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContributorReviewsService = TestBed.get(ContributorReviewsService);
    expect(service).toBeTruthy();
  });
});
