import { Pipe, PipeTransform } from '@angular/core';
import { Grad } from 'src/app/gradmanagement/Grad';
 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(grads: Grad[], searchText: string) {
    return grads.filter(grad => grad.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}