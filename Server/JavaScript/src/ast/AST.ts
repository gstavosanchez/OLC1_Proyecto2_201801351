import { Sentencia } from "./Sentencia";

export class AST extends Sentencia {
    private sentencias:Array<Sentencia>;
    //private listaError: Array<string>;
    //private listaPrints:Array<string>;
    constructor(
        sentecias:Array<Sentencia>
    ) {
        super(0,0);
        this.sentencias = sentecias;
    }

    translate():string{
        let code:string = "";
        this.sentencias.forEach(element => {
            code += element.translate();
        });
        return code;
    }

    getNameSon():string{
        throw new Error("Method not implemented.");
    }
}