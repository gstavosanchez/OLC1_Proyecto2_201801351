import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { Type,translateType } from "../Tipo";

export class Declaracion extends Sentencia {

    id:string;
    valor:Sentencia;
    type:Type;

    constructor(
        type:Type,
        id:string,
        valor:Sentencia,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.id = id;
        this.valor = valor;
        this.type = type;
    }

    translate():string{
        if(this.valor == null) return `var ${this.id}; \n`;
        if(this.type == Type.STRING && this.valor != null ) return `var ${this.id} = "${this.valor.translate()}";\n`
        if(this.type == Type.CHAR && this.valor != null ) return `var ${this.id} = '${this.valor.translate()}';\n`  
        return `var ${this.id} = ${this.valor.translate()}; \n`;
    }
    
    public getNameSon():string{
        return "DECLARACION";
    }

    generateGrafo(grafo:Grafo,padre:string):void{
        let padreAux = padre;

        //Tipo
        let nameSon = "nodo"+grafo.contador;
        grafo.grafo += " "+ nameSon + "[label = \"Tipo: " + translateType(this.type) + "\"];\n";
        grafo.grafo += " " + padre + " -> " + nameSon + ";\n";
        grafo.contador++;
        
        // Id
        nameSon = "nodo"+grafo.contador;
        grafo.grafo += "  " + nameSon + "[label=\"ID\"];\n";
        grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
        grafo.contador++;

        let padreHijo:string = nameSon;
        ///Identificador
        nameSon = "nodo"+grafo.contador;
        grafo.grafo += " " + nameSon + "[label=\" Id: " + this.id + "\"];\n";
        grafo.grafo += "  " + padreHijo + " -> " + nameSon + ";\n";
        grafo.contador ++;

        //Expresion
        if(this.valor != null){
            nameSon = "nodo"+grafo.contador;
            grafo.grafo += "  " + nameSon + "[label=\"" + this.valor.getNameSon() + "\"];\n";
            grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
            grafo.contador++;
            this.valor.generateGrafo(grafo, nameSon);
        }

    }
}