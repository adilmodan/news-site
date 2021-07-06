import { TestBed } from '@angular/core/testing';

import { AddnewNewsServiceService } from './addnew-news-service.service';

describe('AddnewNewsServiceService', () => {
  let service: AddnewNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
