import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorReviewsPage } from './contributor-reviews.page';

describe('ContributorReviewsPage', () => {
  let component: ContributorReviewsPage;
  let fixture: ComponentFixture<ContributorReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorReviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
