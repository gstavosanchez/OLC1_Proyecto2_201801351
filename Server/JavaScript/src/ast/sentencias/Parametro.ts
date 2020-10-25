import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { Type,translateType } from "../Tipo";

export class Parametro extends Sentencia {

    private id:string;
    private type:Type;

    constructor(
        type:Type,
        id:string,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.id = id;
        this.type = type;
    }

    translate():string{
        return `${this.id}`;
    }
    
    public getNameSon():string{
        return "PARAMETRO";
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        //Tipo
        let nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "Tipo: ${translateType(this.type)}"];\n`
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //ID
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon} [label = "ID"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

        //Identificador;

        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "Id: ${this.id}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

    }
}