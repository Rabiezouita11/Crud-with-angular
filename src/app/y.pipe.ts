import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'y'
})
export class YPipe implements PipeTransform {

  transform(items: any[],search : string): any[] {
    if(!items){
      return [];
    }
    if (!search){
      return items;
    }
    search = search.toLocaleLowerCase();
    return items.filter(it =>{
        return it.genre.toLocaleLowerCase().includes(search);
      }
    )
  }

}
