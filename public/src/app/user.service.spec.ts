/* tslint:disable:no-unused-variable */
/// <reference path="../../typings/index.d.ts" />

import { addProviders, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: User', () => {
  beforeEach(() => {
    addProviders([UserService]);
  });

  it('should ...',
    inject([UserService],
      (service: UserService) => {
        expect(service).toBeTruthy();
      }));
});
