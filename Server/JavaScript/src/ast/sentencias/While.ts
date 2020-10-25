import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class While extends Sentencia {
    private condicion:Sentencia;
    private sentencias:Array<Sentencia>;
    constructor(
        condicion:Sentencia,
        sentencias:Array<Sentencia>,
        linea:number,
        columna:number
    ) {
        super(linea,columna);
        this.condicion = condicion;
        this.sentencias = sentencias;

    }
    translate():string{
        let cadena = `while(${this.condicion.translate()}){\n`;
        this.sentencias.forEach(instru => {
            cadena += instru.translate();
        });
        return `${cadena}\n}\n`;
    }

    getNameSon():string{
        return "WHILE";
    }
    generateGrafo(grafo:Grafo,padre:string):void{
        const dadInit:string = padre;

        //Condicion
        let nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "CONDICION"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Parametros de la Condicion
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.condicion.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.condicion.generateGrafo(grafo,nameSon);

        //Instrucciones
        padre = dadInit;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCIONES"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Listado de Instrucciones
        padre = nameSon;
        if(this.sentencias.length != 0 || this.sentencias != null){
            this.sentencias.forEach(value => {
                nameSon = ` nodo${grafo.contador}`;
                grafo.grafo += ` ${nameSon}[label = "${value.getNameSon()}"];\n`;
                grafo.grafo += ` ${padre} -> ${nameSon};\n`;
                grafo.contador++;
                value.generateGrafo(grafo,nameSon);
            });
        }

        
    }
}