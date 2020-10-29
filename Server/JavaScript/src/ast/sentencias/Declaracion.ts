import { Grafo } from "../grafo/grafo";
import { Sentencia } from "../Sentencia";
import { Type,translateType } from "../Tipo";

export class Declaracion extends Sentencia {

    id:Array<Sentencia>;
    valor:Sentencia;
    type:Type;

    constructor(
        type:Type,
        id:Array<Sentencia>,
        valor:Sentencia,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.id = id;
        this.valor = valor;
        this.type = type;
    }

    translate():string{
        if(this.valor == null){
            let listId:string = "";
            this.id.forEach((valor,index) => {
                if(index+1 == this.id.length){
                    listId += `${valor.translate()}`
                }else{
                    listId += `${valor.translate()},`
                }
            });
            return `var ${listId}; \n`
        } else if(this.type == Type.STRING && this.valor != null){
            let listId:string = "";
            this.id.forEach((valor,index) => {
                if(index + 1 == this.id.length){
                    listId += `${valor.translate()}`
                }else{
                    listId += `${valor.translate()},`
                }
            });
            return `var ${listId} = "${this.valor.translate()}";\n`
        } else if(this.type == Type.CHAR && this.valor != null){
            let listId:string = "";
            this.id.forEach((valor,index) => {
                if(index + 1 == this.id.length){
                    listId += `${valor.translate()}`
                }else{
                    listId += `${valor.translate()},`
                }
            });
            return `var ${listId} = '${this.valor.translate()}';\n`
        }else{
            let listId:string = "";
            this.id.forEach((valor,index) => {
                if(index + 1 == this.id.length){
                    listId += `${valor.translate()}`
                }else{
                    listId += `${valor.translate()},`
                }
            });
            return `var ${listId} = ${this.valor.translate()} ;\n`
        }
        
    }
    
    public getNameSon():string{
        return "DECLARACION";
    }

    generateGrafo(grafo:Grafo,padre:string):void{
        let padreAux = padre;
        
        //Tipo
        let nameSon = "nodo"+grafo.contador;
        grafo.grafo += " "+ nameSon + "[label = \"Tipo: " + translateType(this.type) + "\"];\n";
        grafo.grafo += " " + padre + " -> " + nameSon + ";\n";
        grafo.contador++;
        
  


        let padreHijo:string = padre;
        ///Identificador
        
        if(this.id.length != 0 || this.id != null){
            this.id.forEach(valor => {
                nameSon = "nodo"+grafo.contador;
                grafo.grafo += " " + nameSon + "[label=\" " + valor.getNameSon() + "\"];\n";
                grafo.grafo += "  " + padreHijo + " -> " + nameSon + ";\n";
                grafo.contador ++;
                valor.generateGrafo(grafo,nameSon);

            });
        }

        //Expresion
        if(this.valor != null){
            nameSon = "nodo"+grafo.contador;
            grafo.grafo += "  " + nameSon + "[label=\"" + this.valor.getNameSon() + "\"];\n";
            grafo.grafo += "  " + padre + " -> " + nameSon + ";\n";
            grafo.contador++;
            this.valor.generateGrafo(grafo, nameSon);
        }

    }
}