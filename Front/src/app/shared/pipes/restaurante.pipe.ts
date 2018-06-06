import { Pipe, PipeTransform } from '@angular/core';
import { Restaurante } from '../../entities/restaurante';

@Pipe({ name: 'restaurante' })
export class RestaurantePipe implements PipeTransform {
    transform(id: number, restaurantes: Restaurante[]): string
    {
        let nome = "-";
        for(let r of restaurantes)
        {
            if(r.id == id){
                nome = r.nome;
                break;;
            }
        };
        return nome;
    }
}
