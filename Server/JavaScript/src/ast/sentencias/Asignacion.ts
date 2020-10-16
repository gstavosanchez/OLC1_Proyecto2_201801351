import { Sentencia } from "../Sentencia";

export class Asignacion extends Sentencia{
    id:string;
    valor:Sentencia;

    constructor(
        id:string,
        valor:Sentencia,
        line:number,
        column:number   
    ){
        super(line,column);
        this.id = id;
        this.valor = valor;
    }

    translate():string{
        return `${this.id} = ${this.valor};\n`;
    }
    getNameSon():string{
        return 'ASIGNACION';
    }
}