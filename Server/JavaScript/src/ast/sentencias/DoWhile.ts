import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class DoWhile extends Sentencia {
    private condicion:Sentencia;
    private sentecias:Array<Sentencia>;
    constructor(
        sentencias:Array<Sentencia>,
        condicion:Sentencia,
        line:number,
        column:number
    ) {
        super(line,column);
        this.condicion = condicion;
        this.sentecias = sentencias;
    }
    translate():string{
        let data:string = "do { \n";
        let listaSentencias:string = "";
        this.sentecias.forEach(instruccion => {
            listaSentencias += instruccion.translate();
        });
        data += `${listaSentencias}\n} while(${this.condicion.translate()}); \n`;
        return data;
    }
    getNameSon():string{return "DOWHILE"}
    generateGrafo(grafo:Grafo,padre:string):void{
        let dadInit:string = padre;

        //Instrucciones
        let nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCIONES"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        
        //Lista Instrucciones
        padre = nameSon;
        if(this.sentecias.length != 0 || this.sentecias != null){
            this.sentecias.forEach(value => {
                nameSon = ` nodo${grafo.contador}`;
                grafo.grafo += ` ${nameSon}[label = "${value.getNameSon()}"];\n`;
                grafo.grafo += ` ${padre} -> ${nameSon};\n`;
                grafo.contador++;
                value.generateGrafo(grafo,nameSon);
            });
        }

        //Condicion
        padre = dadInit;
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
        this.condicion.generateGrafo(grafo,nameSon);



    }
}