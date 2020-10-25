import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class Asignacion extends Sentencia{
    id:string;
    valor:Sentencia;

    constructor(
        id:string,
        valor:Sentencia,
        line:number,
        column:number   
    ){
        super(line,column);
        this.id = id;
        this.valor = valor;
    }

    translate():string{
        return `${this.id} = ${this.valor.translate()};\n`;
    }
    getNameSon():string{
        return 'ASIGNACION';
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        //Identificador
        let nameSon = `nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label= "${this.id}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`
        grafo.contador++;
        
        //Id
        nameSon = `nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label= "${this.valor.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`
        grafo.contador++;
        this.valor.generateGrafo(grafo,nameSon);
    }
}