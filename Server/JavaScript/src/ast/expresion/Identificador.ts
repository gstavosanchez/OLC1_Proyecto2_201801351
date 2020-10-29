import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class Identificador extends Sentencia {
    id:string;
    constructor(
        id:string,
        line:number,
        columna:number
    ) {
        super(line,columna);
        this.id = id
    }

    translate():string{
        return this.id;
    }
    getNameSon():string{
        return "IDENTIFICADOR";
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        let nombreHijo = "nodo"+grafo.contador;
        grafo.grafo += "  "+nombreHijo +"[label=\""+ this.id +"\"];\n";
        grafo.grafo += "  "+padre +" -> "+ nombreHijo+";\n";
        grafo.contador++;
    }
}