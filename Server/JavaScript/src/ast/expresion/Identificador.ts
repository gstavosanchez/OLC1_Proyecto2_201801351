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
        let aux:string = "";
        let contador:number = grafo.getContador();
        let nameSon = `nodo${grafo.getContador()}`;
        aux += "  "+nameSon +"[label=\""+ this.id +"\"];\n";
        aux += "  "+padre +" -> "+ nameSon+";\n";
        contador++;
        grafo.setContador(contador);
        grafo.setGrafo(aux);
    }
}