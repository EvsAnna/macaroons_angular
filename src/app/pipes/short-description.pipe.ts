import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {
  transform(description: string): string {
    if (description.length < 95) {
      return description;
    } else {
      return description.slice(0, 94) + '...';
    }
  }
}
