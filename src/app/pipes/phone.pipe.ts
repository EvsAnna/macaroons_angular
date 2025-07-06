import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePattern'
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($2) $3-$4-$5');
  }
}
