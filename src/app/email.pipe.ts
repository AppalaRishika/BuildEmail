import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email',
})
export class EmailPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    if (!value || filterString === '' || propName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[propName].toLowerCase().includes(filterString.toLowerCase())
      ) {
        result.push(a);
      }
    });
    return result;
  }
}
