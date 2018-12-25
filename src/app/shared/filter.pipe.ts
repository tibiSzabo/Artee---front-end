import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field:string, value: string): any[] {

    if(!items) return [];
    if(!value || value.trim().length == 0) return items;

    if (field == 'title') {
      return items.filter( str => {
        return str[field].toLowerCase().includes(value.toLowerCase().trim());
      });
    } else {
      return items.filter( str => {
        return str.category.name.toLowerCase().includes(value.toLowerCase().trim());
      });
    }
  }

}
