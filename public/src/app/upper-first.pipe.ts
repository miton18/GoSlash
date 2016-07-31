import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirst'
})
export class UpperFirstPipe implements PipeTransform {

  transform(value: string, args?: any): string {
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }

}
