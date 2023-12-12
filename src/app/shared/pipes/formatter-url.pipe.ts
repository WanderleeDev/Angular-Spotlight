import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatterUrl'
})
export class FormatterUrlPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('dl=0', 'raw=1');
  }

}
