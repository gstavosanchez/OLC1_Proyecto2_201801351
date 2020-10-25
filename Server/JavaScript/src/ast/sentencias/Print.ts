import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class Print extends Sentencia {
    expresion:Sentencia;
    constructor(
        expresion:Sentencia,
        linea:number,
        columna:number
    ) {
        super(linea,columna);
        this.expresion = expresion;
    }

    translate():string{
        return `console.log(${this.expresion.translate()}); \n`
    }
    getNameSon():string{
        return "PRINT";
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        const nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.expresion.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.expresion.generateGrafo(grafo,nameSon);
    }
}