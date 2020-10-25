import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { translateType, Type } from "../Tipo";

export class Class extends Sentencia {
    private type:Type;
    private id:string;
    private sentencias:Array<Sentencia>;

    constructor(
        type:Type,
        id:string,
        sentencias:Array<Sentencia>,
        line:number,
        column:number
    ) {
        super(line,column);
        this.type = type;
        this.id = id;
        this.sentencias = sentencias;
    }
    translate():string{
        switch(this.type){
            case Type.MAIN: return this.getTranslateClass("class");
            case Type.INTERFACE :return this.getTranslateClass("interface");
            case Type.CLASS: return this.getTranslateClass("class");
            default:return "";
        }
    }
    getNameSon():string{return "CLASS"}

    private getTranslateClass(tipo:string):string{
        if(this.sentencias == null && tipo == "class"|| this.sentencias.length == 0 && tipo == "class") return `class ${this.id} {}`
        if(this.sentencias == null && tipo == "interface"|| this.sentencias.length == 0 && tipo == "interface") return `interface ${this.id} {}`

        let data:string = `${tipo} ${this.id} {\n`
        let listaSetencias:string  = ""
        this.sentencias.forEach(element => {
            listaSetencias += element.translate();
        });
        data += `${listaSetencias}\n`;

        return data+"\n}\n";
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
        grafo.grafo += " " + nameSon + "[label=\" Id: " + this.id+ "\"];\n";
        grafo.grafo += "  " + padreHijo + " -> " + nameSon + ";\n";
        grafo.contador ++;

        //Bloque de sentencias
        padre = padreAux;
        nameSon = "nodo"+grafo.contador;
        grafo.grafo += " "+nameSon+"[label = \"INSTRUCCIONES\"];\n";
        grafo.grafo += " "+padre+" -> "+ nameSon + ";\n";
        grafo.contador++;
        padre = nameSon;
        if(this.sentencias != null){
            this.sentencias.forEach(value =>{
                nameSon = "nodo"+grafo.contador;
                grafo.grafo += "  "+nameSon +"[label=\""+value.getNameSon()+"\"];\n";
                grafo.grafo += "  "+padre +" -> "+ nameSon +";\n";
                grafo.contador++;
                value.generateGrafo(grafo,nameSon);
            });
        }
        



        
        


    }
}