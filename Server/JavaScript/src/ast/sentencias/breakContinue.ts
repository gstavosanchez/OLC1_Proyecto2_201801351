import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { Type,translateType } from "../Tipo";

export class BreakContinue extends Sentencia {
    private type:Type;
    constructor(
        type:Type,
        line:number,
        column:number
    ) {
        super(line,column);
        this.type = type;
    }
    getNameSon():string {return "BREAK-CONTINUE"}
    translate():string{
        if(this.type == Type.BREAK) return `break; \n`; 
        if(this.type == Type.CONTINUE) return `continue; \n`;
        return "";
    }
    
    generateGrafo(grafo:Grafo,padre:string):void{
        const nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${translateType(this.type)}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
    }
}