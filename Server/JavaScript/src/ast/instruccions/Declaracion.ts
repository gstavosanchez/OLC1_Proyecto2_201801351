import {Instruccion} from '../Instrucciones'
import {Type,TypeOperation} from '../Tipo'

export class Declaracion extends Instruccion{

    id:string;
    valor:Instruccion;
    type:Type;
     constructor(
        tipo:Type,
        id:string,
        valor:Instruccion,
        line:Number,
        column:Number

    ){
        super(line,column);
        this.id = id;
        this.valor = valor;
        this.type = tipo
    }

    translate():string{
        return `var ${this.id} = ${this.valor.translate()};` + '\n';
       
    }

    getNameSon():string{
        return "DECLARACION"
    }

}