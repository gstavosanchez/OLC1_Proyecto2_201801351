export class Grafo {
    public contador:number;
    public grafo:string;

    constructor(
        contador:number,
        grafo:string
    ) {
        this.grafo= grafo;
        this.contador = contador;
    }
    

    public getContador():number{
        return this.contador;
    }
    public getGrafo():string{
        return this.grafo;
    }
    public setContador(contador:number):void{
        this.contador = contador;
    }

    public setGrafo(grafo:string):void{
        this.grafo = grafo;
    }
}