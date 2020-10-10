import { Instruccion } from "./Instrucciones";

export class AST extends Instruccion{

    instrucciones:Array<Instruccion>;
    listaErrorr:Array<string> = new Array<string>();
    listaPrint:Array<string> = new Array<string>();

    

    constructor(
        instrucciones:Array<Instruccion>
    ){
        super(0,0)
        this.instrucciones = instrucciones;
    }

    translate():string{
        let cadena:string = "";
        for (let index = 0; index < this.instrucciones.length; index++) {
            cadena += this.instrucciones[index].translate();
            
        }
        return cadena;
    }
    getNameSon():string{
        throw new Error("Method not implementd");
    }
}