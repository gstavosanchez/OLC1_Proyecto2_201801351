import { Sentencia } from "../Sentencia";
import { Type } from "../Tipo";

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
        if(parametro != undefined){
            this.parametro = parametro;
        }else{
            this.parametro = undefined;
        }
        
        
    }
    translate():string{
        let data:string = `${this.id} `;
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

}