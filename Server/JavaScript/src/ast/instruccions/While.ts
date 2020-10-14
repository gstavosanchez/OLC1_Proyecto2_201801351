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
       let cadena = "mientras("+this.condicion.translate()+"){\n";
       this.instruccion.forEach(ins => {
           cadena += ins.translate()
       });
       return `${cadena}\n}\n`
   }

   getNameSon():string{
       return "WHILE";
   }
}