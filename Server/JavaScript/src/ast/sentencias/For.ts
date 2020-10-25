import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";

export class For extends Sentencia {
    private declaracion:Sentencia;
    private expresionOne:Sentencia;
    private expresionTwo:Sentencia;
    private sentencias:Array<Sentencia>;

    constructor(
        declaracion:Sentencia,
        expresionOne:Sentencia,
        expresionTwo:Sentencia,
        sentecias:Array<Sentencia>,
        line:number,
        column:number
    ) {
        super(line,column);
        this.declaracion = declaracion;
        this.expresionOne = expresionOne;
        this.expresionTwo = expresionTwo;
        this.sentencias = sentecias;
    }
    translate():string{
        const decl:string = this.declaracion.translate().replace(`\n`,'');
        let data:string = `for(${decl} ${this.expresionOne.translate()};${this.expresionTwo.translate()}) {\n`;
        let listaSentencias:string = "";
        this.sentencias.forEach(instruccion => {
            listaSentencias += instruccion.translate();
        });
        data += `${listaSentencias}\n}\n`;
        return data;
    }
    getNameSon():string{return "FOR"}
    generateGrafo(grafo:Grafo,padre:string):void{
        let dadInit:string = padre;

        //Declaracion
        let nameSon:string = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "DECLARACION"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Parametros de la declaracion
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.declaracion.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.declaracion.generateGrafo(grafo,nameSon);

        //Expresion Uno
        padre = dadInit;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCION"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Elementos de la expresion
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.expresionOne.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.expresionOne.generateGrafo(grafo,nameSon);

        //Expresion Dos
        padre = dadInit;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCION"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //Elementos de la expresion
        padre = nameSon;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "${this.expresionTwo.getNameSon()}"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;
        this.expresionTwo.generateGrafo(grafo,nameSon);

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