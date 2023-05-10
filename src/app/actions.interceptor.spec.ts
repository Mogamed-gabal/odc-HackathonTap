import { TestBed } from '@angular/core/testing';

import { ActionsInterceptor } from './actions.interceptor';

describe('ActionsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ActionsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ActionsInterceptor = TestBed.inject(ActionsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
