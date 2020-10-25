import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { TypeOperation } from "../Tipo";

export class Cambio extends Sentencia  {
    private id:string;
    private type:TypeOperation;
    private bandera:boolean;

    constructor(
        type:TypeOperation,
        id:string,
        bandera:boolean,
        line:number,
        column:number
    ) {
        super(line,column);
        this.id = id;
        this.type = type;
        this.bandera = bandera;
    }
    translate():string{
        if(this.type == TypeOperation.ADICION && this.bandera == true) return `${this.id}++; \n`;
        if(this.type == TypeOperation.SUSTRACCION && this.bandera == true) return `${this.id}--; \n`;
        if(this.type == TypeOperation.ADICION && this.bandera == false) return `${this.id}++ `;
        if(this.type == TypeOperation.SUSTRACCION && this.bandera == false) return `${this.id}-- `;
        return "";
    }
    getNameSon():string{
        if(this.type == TypeOperation.ADICION) return `INCREMENTO`;
        if(this.type == TypeOperation.SUSTRACCION) return `DECREMENTO`;
        return "";
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        let nombreHijo = " nodo"+grafo.contador;
        grafo.grafo += "  "+nombreHijo +"[label=\" Id: "+this.id+"\"];\n";
        grafo.grafo += "  "+padre +" -> "+ nombreHijo+";\n";
        grafo.contador++;
        
    }
}