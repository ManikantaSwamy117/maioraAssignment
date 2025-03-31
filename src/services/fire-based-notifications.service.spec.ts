import { TestBed } from '@angular/core/testing';

import { FireBasedNotificationsService } from './fire-based-notifications.service';

describe('FireBasedNotificationsService', () => {
  let service: FireBasedNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBasedNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
