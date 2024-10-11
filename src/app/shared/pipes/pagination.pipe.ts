import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform<T>(list: T[], index: number, quantity: number): T[] {
    if (!Array.isArray(list) || list.length <= 0) return list;
    if (index === 1) return list.slice(0, quantity);

    return list.slice(quantity * (index - 1), quantity * index);
  }
}
