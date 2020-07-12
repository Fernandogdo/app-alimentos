import { TestBed, async, inject } from '@angular/core/testing';

import { AccessWebGuard } from './access-web.guard';

describe('AccessWebGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessWebGuard]
    });
  });

  it('should ...', inject([AccessWebGuard], (guard: AccessWebGuard) => {
    expect(guard).toBeTruthy();
  }));
});
