import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailUserResolver } from './detail-user.resolver';

describe('detailUserResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailUserResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
