export class Restaurante{
    id : number;
    nome : string;

    constructor(init? : Partial<Restaurante>) {
        if(init != null) Object.assign(this, init);
        else{
            this.id = undefined;
            this.nome = undefined;
        }
    }
}