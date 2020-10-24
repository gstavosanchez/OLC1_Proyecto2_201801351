import { Sentencia } from "../Sentencia";

export class While extends Sentencia {
    private condicion:Sentencia;
    private sentencias:Array<Sentencia>;
    constructor(
        condicion:Sentencia,
        sentencias:Array<Sentencia>,
        linea:number,
        columna:number
    ) {
        super(linea,columna);
        this.condicion = condicion;
        this.sentencias = sentencias;

    }
    translate():string{
        let cadena = `while(${this.condicion.translate()}){\n`;
        this.sentencias.forEach(instru => {
            cadena += instru.translate();
        });
        return `${cadena}\n}\n`;
    }

    getNameSon():string{
        return "WHILE";
    }
    generateGrafo():void{}
}