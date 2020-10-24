import { Sentencia } from "../Sentencia";

export class Return extends Sentencia {
    private sentencia:Sentencia;
    constructor(
        sentencia:Sentencia,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.sentencia = sentencia;
    }
    translate():string{
        return `return (${this.sentencia.translate()});`
    }
    getNameSon():string{
        return "return";
    }

    generateGrafo():void{}
}