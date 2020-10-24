import { NodoError } from "./error";
import { Grafo } from "./grafo/grafo";
import { Sentencia } from "./Sentencia";

export class AST extends Sentencia {
    private sentencias: Array<Sentencia>;
    private listaError: Array<NodoError>;
    //private listaPrints:Array<string>;
    constructor(
        sentecias: Array<Sentencia>,
        listaError: Array<NodoError>
    ) {
        super(0, 0);
        this.sentencias = sentecias;
        this.listaError = listaError;
    }

    translate(): string {
        let code: string = "";
        this.sentencias.forEach(element => {
            code += element.translate();
        });
        return code;
    }

    getListError(): string {
        let error: string = "";
        this.listaError.forEach(err => {
            error += `Error Tipo:${err.tipo} Valor:${err.valor} Descripcion:${err.descripcion} - Ln:${err.line},Col:${err.column}  \n`
        });
        //this.listaError = new Array<NodoError>();
        return error;
    }

    generateGrafo(grafo: Grafo, padre: string): void {
        let nameSon:string = "nodo"+grafo.contador;
        grafo.grafo += "  "+nameSon +"[label=\"SENTENCIAS\"];\n";
        grafo.grafo += "  "+padre +" -> "+ nameSon+";\n";
        grafo.contador++;
        padre = nameSon;

        this.sentencias.forEach(inst =>{
            nameSon = "nodo"+grafo.contador;
            grafo.grafo += "  "+nameSon +"[label=\""+inst.getNameSon()+"\"];\n";
            grafo.grafo += "  "+padre +" -> "+ nameSon+";\n";
            grafo.contador++;
            inst.generateGrafo(grafo,nameSon);

        });
    }

    getNameSon(): string {
        throw new Error("Method not implemented.");
    }
}