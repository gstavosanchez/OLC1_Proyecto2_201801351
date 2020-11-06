import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { TypeOperation } from "../Tipo";

export class OperacionLogica extends Sentencia {
    operador1: Sentencia;
    operador2: Sentencia;
    tipoOperacion: TypeOperation;

    constructor(
        tipoOperacion: TypeOperation,
        operador1: Sentencia,
        operador2: Sentencia,
        line: number,
        column: number
    ) {
        super(line, column);
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.tipoOperacion = tipoOperacion;
    }
    translate(): string {
        switch (this.tipoOperacion) {
            case TypeOperation.AND: return this.operador1.translate() + " && " + this.operador2.translate();
            case TypeOperation.OR: return this.operador1.translate() + " || " + this.operador2.translate();
            case TypeOperation.NOT: return "!" + this.operador1.translate();
            case TypeOperation.XOR: return this.operador1.translate() + " ^ " + this.operador2.translate();
            default: return '';
        }
    }
    getNameSon(): string {
        switch (this.tipoOperacion) {
            case TypeOperation.AND: { return "AND"; }
            case TypeOperation.OR: { return "OR"; }
            case TypeOperation.XOR: { return "XOR"; }
            case TypeOperation.NOT: { return "NOT"; }
            default: { return ""; }
        }
    }
    generateGrafo(grafo: Grafo, padre: string): void {
        let nameSon = "nodo" + grafo.contador;
        grafo.grafo += " " + nameSon + "[label=\"" + this.operador1.getNameSon() + "\"];\n";
        grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
        grafo.contador++;
        this.operador1.generateGrafo(grafo, nameSon);

        if (this.operador2 != null || this.operador2 != '') {
            if (this.tipoOperacion != TypeOperation.NOT) {
                nameSon = "nodo" + grafo.contador;
                grafo.grafo += "  " + nameSon + "[label=\"" + this.operador2.getNameSon() + "\"];\n";
                grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
                grafo.contador++;
                this.operador2.generateGrafo(grafo, nameSon);

            }

        }
    }
}