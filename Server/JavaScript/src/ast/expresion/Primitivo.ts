import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class Primitivo extends Sentencia {
    valor:any;
    constructor(
        valor:any,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.valor = valor;
    }
    translate():string{
        return this.valor;
    }
    getNameSon():string{
        return "PRIMITIVO";
        
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        let nameSon = "nodo"+grafo.contador;
        grafo.grafo += "  "+nameSon +"[label=\""+ this.valor.toString() +"\"];\n";
        grafo.grafo += "  "+padre +" -> "+ nameSon+";\n";
        grafo.contador++;
        
    }
}