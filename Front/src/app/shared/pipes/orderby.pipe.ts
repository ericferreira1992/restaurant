import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {

    transform(array: any[], field: string, asc: Boolean = true): any[] {
        array.sort((a: any, b: any) => {
            if (a[field] < b[field])
                return asc ? -1 : 1;
            if (a[field] > b[field])
                return asc ? 1 : -1;
                
            return 0;
        });
        return array;
    }

}
