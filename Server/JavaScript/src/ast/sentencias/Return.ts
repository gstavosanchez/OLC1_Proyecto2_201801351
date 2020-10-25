import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class Return extends Sentencia {
    private sentencia:Sentencia;
    constructor(
        sentencia:Sentencia,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.sentencia = sentencia;
    }
    translate():string{
        return `return (${this.sentencia.translate()});`
    }
    getNameSon():string{
        return "RETURN";
    }

    generateGrafo(grafo:Grafo,padre:string):void{
        const nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.sentencia.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.sentencia.generateGrafo(grafo,nameSon);
    }
}