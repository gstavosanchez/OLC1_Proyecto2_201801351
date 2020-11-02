import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { translateType, Type } from "../Tipo";

export class Funcion extends Sentencia {
    private type:Type;
    private id:string;
    private parametro:Array<Sentencia> | undefined;
    private sentencias:Array<Sentencia>;


    constructor(
        type:Type,
        id:string,
        sentecias:Array<Sentencia>,
        line:number,
        column:number,
        parametro?:Array<Sentencia> | undefined
        
    ) {
        super(line,column);
        this.id = id;
        this.type = type;
        this.sentencias = sentecias;
        if(parametro != null){
            this.parametro = parametro;
        }else{
            this.parametro = undefined;
        }
        
        
    }
    translate():string{
        let data:string = `function ${this.id} `;
        if(this.parametro != undefined){
            let listParametros:string = "";
            for (let x = 0; x < this.parametro.length; x++) {
                const parameter:Sentencia = this.parametro[x];
                if(x+1 == this.parametro.length){
                    listParametros += `${parameter.translate()}`;
                }else{
                    listParametros += `${parameter.translate()},`;
                }     
            }
            data += `(${listParametros}){\n`;
            
        }else{
            data += '(){\n';
        }
        let listaSentencias:string = "";
        this.sentencias.forEach(element => {
            listaSentencias += element.translate(); 
        });
        data += `${listaSentencias} \n} \n`;


        return data;
    }
    getNameSon():string{return "FUNCION"}

    generateGrafo(grafo:Grafo,padre:string):void{
       const padreOrinal:string = padre;

        //Tipo
        let nameSon = `nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "Tipo: ${translateType(this.type)}"];\n`
        grafo.grafo += ` ${padre} -> ${nameSon};\n`;
        grafo.contador++;

        //ID
        nameSon = ` nodo${grafo.contador}`;
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
        padre = padreOrinal;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "PARAMETROS"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;


        //Lista de Parametros
        padre = nameSon;
        if(this.parametro != undefined || this.parametro != null){
            this.parametro.forEach(value =>{
                nameSon = " nodo"+grafo.contador;
                grafo.grafo += "  "+nameSon +"[label=\""+value.getNameSon()+"\"];\n";
                grafo.grafo += "  "+padre +" -> "+ nameSon +";\n";
                grafo.contador++;
                value.generateGrafo(grafo,nameSon);
            })
        }

        //Instruccion
        padre = padreOrinal;
        nameSon = ` nodo${grafo.contador}`;
        grafo.grafo += ` ${nameSon}[label = "INSTRUCCIONES"];\n`;
        grafo.grafo += ` ${padre} -> ${nameSon} ;\n`
        grafo.contador++;

        //Lista Instrucciones
        padre = nameSon;
        if(this.sentencias.length != 0 || this.sentencias != null ){
            this.sentencias.forEach(value =>{
                nameSon = " nodo"+grafo.contador;
                grafo.grafo += "  "+nameSon +"[label=\""+value.getNameSon()+"\"];\n";
                grafo.grafo += "  "+padre +" -> "+ nameSon +";\n";
                grafo.contador++;
                value.generateGrafo(grafo,nameSon);
            });
        }
  
    }
}