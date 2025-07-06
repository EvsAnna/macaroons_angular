import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(price: number): string {
      return price.toFixed(2).toString() + ' руб.';
  }
}
