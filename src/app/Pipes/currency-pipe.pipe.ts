import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number) {
    return new Intl.NumberFormat('USD', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(Number(value));
}

}
