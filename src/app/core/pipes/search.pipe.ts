import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interface/iproduct';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(arryofObject: any[], klma: string): any[] {
    return arryofObject.filter((item) =>
      item.title.toLowerCase().includes(klma.toLowerCase())
    );
  }
}
