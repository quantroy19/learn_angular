import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: any, ...args: any): string {
    console.log(value, args);
    if (value == 1) {
      return 'Nam';
    } else if (value == 2) {
      return 'Nữ';
    } else {
      return 'khác';
    }
    // return null;
  }
}
