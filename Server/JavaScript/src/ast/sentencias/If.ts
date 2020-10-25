import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class If extends Sentencia {
    private condicion: Sentencia;
    private sentenciasIf: Array<Sentencia>;
    private sentenciasElse: Array<Sentencia> | undefined;
    private elseIf: Sentencia | undefined;
    constructor(
        condicion: Sentencia,
        sentenciasIf: Array<Sentencia>,
        linea: number,
        columna: number,
        sentenciasElse?: Array<Sentencia> | Sentencia
    ) {
        super(linea, columna);
        this.condicion = condicion;
        this.sentenciasIf = sentenciasIf;
        if (sentenciasElse) {
            if (sentenciasElse instanceof Sentencia) {
                this.elseIf = sentenciasElse;
            } else {
                this.sentenciasElse = sentenciasElse;
            }
        }
    }

    translate(): string {
        let data: string = "";
        let sentenciaIFData: string = "";
        this.sentenciasIf.forEach((seIf) => {
            sentenciaIFData += seIf.translate();
        });
        data += `if(${this.condicion.translate()}){\n${sentenciaIFData}\n}`;
        if (this.elseIf != undefined) {
            data += `else ${this.elseIf.translate()}`;
        } else if (this.sentenciasElse != undefined) {
            let senteciasElseData: string = "";
            this.sentenciasElse.forEach((element) => {
                senteciasElseData += element.translate();
            });
            data += `else {\n ${senteciasElseData} \n}`;
        }

        return data;
    }
    getNameSon(): string {
        return "IF-ELSE_IF-ELSE";
    }
    generateGrafo(grafo: Grafo, padre: string): void {
        const dadInit: string = padre;

        //IF
        let nameSon: string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "IF"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //CONDICION
        let seconDad: string = nameSon;
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "CONDICION"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Parametros de la Condicion
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.condicion.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.condicion.generateGrafo(grafo, nameSon);

        //Instrucciones
        padre = seconDad;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCIONES"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Lista Instrucciones
        padre = nameSon;
        if (this.sentenciasIf.length != 0 || this.sentenciasIf != null) {
            this.sentenciasIf.forEach((value) => {
                nameSon = ` nodo${grafo.contador}`;
                grafo.grafo += ` ${nameSon}[label = "${value.getNameSon()}"];\n`;
                grafo.grafo += ` ${padre} -> ${nameSon};\n`;
                grafo.contador++;
                value.generateGrafo(grafo, nameSon);
            });
        }

        //Else

        if (this.sentenciasElse != undefined) {
            padre = dadInit;
            nameSon = ` nodo${grafo.contador}`;
            grafo.grafo += ` ${nameSon}[label = "ELSE"];\n`;
            grafo.grafo += ` ${padre} -> ${nameSon};\n`;
            grafo.contador++;

            //Instrucciones
            padre = nameSon;
            nameSon = ` nodo${grafo.contador}`;
            grafo.grafo += ` ${nameSon}[label = "INSTRUCCIONES"];\n`;
            grafo.grafo += ` ${padre} -> ${nameSon};\n`;
            grafo.contador++;

            //Lista Instrucciones
            padre = nameSon;
            if (this.sentenciasElse.length != 0 || this.sentenciasIf != null) {
                this.sentenciasElse.forEach((value) => {
                    nameSon = ` nodo${grafo.contador}`;
                    grafo.grafo += ` ${nameSon}[label = "${value.getNameSon()}"];\n`;
                    grafo.grafo += ` ${padre} -> ${nameSon};\n`;
                    grafo.contador++;
                    value.generateGrafo(grafo, nameSon);
                });
            }
        }
        //Else if
        if (this.elseIf != undefined) {
            padre = dadInit;
            //Else IF
            nameSon = ` nodo${grafo.contador}`;
            grafo.grafo += ` ${nameSon}[label = "ELSE-IF"];\n`;
            grafo.grafo += ` ${padre} -> ${nameSon};\n`;
            grafo.contador++;
            this.elseIf.generateGrafo(grafo,nameSon);
            
        }
    }
}
