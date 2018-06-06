export class Prato{
    id: number;
    nome: string;
    preco: number;
    restauranteId: number;

    constructor(init? : Partial<Prato>) {
        if(init != null) Object.assign(this, init);
        else{
            this.id = undefined;
            this.nome = undefined;
            this.preco = undefined;
            this.restauranteId = undefined;
        }
    }
}