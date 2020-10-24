import { Sentencia } from "../Sentencia";

export class For extends Sentencia {
    private declaracion:Sentencia;
    private expresionOne:Sentencia;
    private expresionTwo:Sentencia;
    private sentencias:Array<Sentencia>;

    constructor(
        declaracion:Sentencia,
        expresionOne:Sentencia,
        expresionTwo:Sentencia,
        sentecias:Array<Sentencia>,
        line:number,
        column:number
    ) {
        super(line,column);
        this.declaracion = declaracion;
        this.expresionOne = expresionOne;
        this.expresionTwo = expresionTwo;
        this.sentencias = sentecias;
    }
    translate():string{
        let data:string = `for(${this.declaracion.translate()};${this.expresionOne.translate()};${this.expresionTwo.translate()}) {\n`;
        let listaSentencias:string = "";
        this.sentencias.forEach(instruccion => {
            listaSentencias += instruccion.translate();
        });
        data += `${listaSentencias}\n}\n`;
        return data;
    }
    getNameSon():string{return "FOR"}
    generateGrafo():void{}
}