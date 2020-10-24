import { Grafo } from "./grafo/grafo";

export abstract class Sentencia {
    private linea:number;
    private column:number;
    public constructor(
        line:number,
        column:number
    ) {
        this.linea = line;
        this.column = column;
    }

    abstract translate():string;
    abstract getNameSon():string;
    abstract generateGrafo(g:Grafo,padre:string):void;
}