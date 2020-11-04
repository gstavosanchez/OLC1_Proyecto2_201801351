import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class LlamadoFuncion extends Sentencia {
    private id: string;
    private sentencias: Array<Sentencia>;

    constructor(
        id: string,
        sentencias: Array<Sentencia>,
        linea: number,
        column: number
    ) {
        super(linea, column);
        this.id = id;
        this.sentencias = sentencias;
    }

    translate(): string {
        
        let data: string = `${this.id}`;
        if ( this.sentencias.length != 0 || this.sentencias != null) {
            let listParemtros: string = ""
            this.sentencias.forEach((sentencias, index) => {
                if (index + 1 == this.sentencias.length) {
                    listParemtros += `${sentencias.translate()}`;
                } else {
                    listParemtros += `${sentencias.translate()},`;
                }
            });
            data += `(${listParemtros});\n`
        } else {
            data += `();\n`
        }
        return data;
    }
    getNameSon(): string { return "INVOCACION" }
    generateGrafo(grafo: Grafo, padre: string): void {
        const padreOriginal: string = padre;

        //ID
        let nameSon: string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon} [label = "ID"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

        //Identificador;
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "Id: ${this.id}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

        //Parametro
        padre = padreOriginal;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "PARAMETROS"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

        //Lista Parametros
        padre = nameSon;
        if (this.sentencias.length != 0 || this.sentencias != null) {
            this.sentencias.forEach(value => {
                nameSon = " nodo" + grafo.contador;
                grafo.grafo += "  " + nameSon + "[label=\"" + value.getNameSon() + "\"];\n";
                grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
                grafo.contador++;
                value.generateGrafo(grafo, nameSon);
            });
        } else {
            nameSon = " nodo" + grafo.contador;
            grafo.grafo += "  " + nameSon + "[label=\"" + "Vacios" + "\"];\n";
            grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
            grafo.contador++;
        }
    }
}