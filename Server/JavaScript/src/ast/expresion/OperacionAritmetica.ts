import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { TypeOperation } from "../Tipo";

export class OperacionAritmetica extends Sentencia {
    operador1: Sentencia;
    operador2: Sentencia;
    tipoOperacion: TypeOperation;
    constructor(
        tipoOperacion: TypeOperation,
        operador1: Sentencia,
        operador2: Sentencia,
        linea: number,
        column: number
    ) {
        super(linea, column);
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.tipoOperacion = tipoOperacion;
    }
    translate(): string {
        switch (this.tipoOperacion) {
            case TypeOperation.SUMA:
                return this.operador1.translate() + " + " + this.operador2.translate();
            case TypeOperation.RESTA:
                return this.operador1.translate() + " - " + this.operador2.translate();
            case TypeOperation.MULTIPLICACION:
                return this.operador1.translate() + " * " + this.operador2.translate();
            case TypeOperation.DIVISION:
                return this.operador1.translate() + " / " + this.operador2.translate();
            case TypeOperation.ADICION:
                return this.operador1.translate() + "++ ;";
            case TypeOperation.SUSTRACCION:
                return this.operador1.translate() + "-- ;";
            case TypeOperation.NEGATIVO:
                return "-" + this.operador1.translate() + ";";
            default:
                return "";
        }
    }

    getNameSon(): string {
        switch (this.tipoOperacion) {
            case TypeOperation.SUMA: { return "SUMA" }
            case TypeOperation.RESTA: { return "RESTA" }
            case TypeOperation.MULTIPLICACION: { return "MULTIPLICACION"; }
            case TypeOperation.DIVISION: { return "DIVISION"; }
            case TypeOperation.ADICION: { return "ADICION" }
            case TypeOperation.SUSTRACCION: { return "SUSTRACCION"; }
            case TypeOperation.NEGATIVO: { return "NEGATIVO"; }
            default: { return ""; }
        }
    }

    generateGrafo(grafo: Grafo, padre: string):void{
        let nameSon = "nodo"+grafo.contador;
        grafo.grafo += " "+nameSon +"[label=\""+this.operador1.getNameSon() + "\"];\n";
        grafo.grafo += "  "+padre +" -> "+ nameSon+";\n";
        grafo.contador++;
        this.operador1.generateGrafo(grafo,nameSon);

        if(this.operador2 != null || this.operador2 != ''){
            nameSon = "nodo"+grafo.contador;
            grafo.grafo += "  " + nameSon + "[label=\"" + this.operador2.getNameSon() + "\"];\n";
            grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
            grafo.contador++;
            this.operador2.generateGrafo(grafo,nameSon);

        }
        
    }
}