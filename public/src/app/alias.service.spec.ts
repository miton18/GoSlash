/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AliasService } from './alias.service';

describe('Service: Alias', () => {
  beforeEach(() => {
    addProviders([AliasService]);
  });

  it('should ...',
    inject([AliasService],
      (service: AliasService) => {
        expect(service).toBeTruthy();
      }));
});
