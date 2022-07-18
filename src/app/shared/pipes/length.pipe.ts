import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    return value.length <= 400 ? value : value.substring(0, 400).concat('...');
  }
}
