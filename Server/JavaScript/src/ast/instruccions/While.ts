import { Instruccion } from "../Instrucciones";

export class While extends Instruccion{

    condicion:Instruccion;
    instruccion:Array<Instruccion>;

   constructor(
        condicion:Instruccion,
        instrucciones:Array<Instruccion>,
        line:Number,
        column:Number
   ){
       super(line,column)
       this.condicion = condicion;
       this.instruccion = instrucciones;
   } 

   translate():string{
       return ''
   }

   getNameSon():string{
       return "WHILE";
   }
}