import { Sentencia } from "../Sentencia";

export class DoWhile extends Sentencia {
    private condicion:Sentencia;
    private sentecias:Array<Sentencia>;
    constructor(
        sentencias:Array<Sentencia>,
        condicion:Sentencia,
        line:number,
        column:number
    ) {
        super(line,column);
        this.condicion = condicion;
        this.sentecias = sentencias;
    }
    translate():string{
        let data:string = "do { \n";
        let listaSentencias:string = "";
        this.sentecias.forEach(instruccion => {
            listaSentencias += instruccion.translate();
        });
        data += `${listaSentencias}\n} while(${this.condicion.translate()}); \n`;
        return data;
    }
    getNameSon():string{return "DOWHILE"}
}