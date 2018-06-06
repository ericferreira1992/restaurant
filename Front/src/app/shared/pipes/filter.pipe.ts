import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

    transform(list: any, obj: any, tratamento?: (([]) => any)): any {

        if((list && typeof list == 'object') && (obj && typeof obj == 'object')){
            let okList = [];

            list.forEach((item) =>{
                var ok = true;
                for (var key in obj){
                    if (obj[key] !== undefined && !Array.isArray(obj[key]) && item[key] !== undefined && obj.hasOwnProperty(key)) {
                        var valueObj = obj[key];
                        var valueList = item[key];

                        if(tratamento && !(valueObj instanceof Boolean) && !(valueList instanceof Boolean))
                        {
                            valueObj = tratamento(valueObj.toString());
                            valueList = tratamento(valueList.toString());
                        }

                        if(valueList.toString().toLowerCase().indexOf(valueObj.toString().toLowerCase()) < 0){
                            ok = false;
                            return;
                        }
                    }
                }

                if(ok) okList.push(Object.assign({}, item));
            });

            return okList;
        }
        return null;
    }

}
