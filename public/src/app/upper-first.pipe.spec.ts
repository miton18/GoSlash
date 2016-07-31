/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UpperFirstPipe } from './upper-first.pipe';

describe('Pipe: UpperFirst', () => {
  it('create an instance', () => {
    let pipe = new UpperFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
