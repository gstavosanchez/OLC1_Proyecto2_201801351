import { Grafo } from "./grafo/grafo";
import { Sentencia } from './Sentencia'

export class Captura extends Sentencia{

    
    constructor(
        line:number,
        column:number
    ) {
        super(line,column);
      
    }
    translate():string{
        return ""
    }
    getNameSon():string{
        return "";
    }
    generateGrafo(grafo:Grafo,padre:string):void{}

}