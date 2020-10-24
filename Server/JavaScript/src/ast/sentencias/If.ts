import { Sentencia } from "../Sentencia";

export class If extends Sentencia {
    private condicion:Sentencia;
    private sentenciasIf:Array<Sentencia>;
    private sentenciasElse:Array<Sentencia> | undefined;
    private elseIf:Sentencia|undefined;
    constructor(
        condicion:Sentencia,
        sentenciasIf:Array<Sentencia>,
        linea:number,
        columna:number,
        sentenciasElse?:Array<Sentencia> | Sentencia,
    ) {
        super(linea,columna);
        this.condicion = condicion;
        this.sentenciasIf = sentenciasIf;
        if(sentenciasElse){
            if(sentenciasElse instanceof Sentencia){
                this.elseIf = sentenciasElse;
            }else{
                this.sentenciasElse = sentenciasElse;
            }
        }
    }

    translate():string{
        let data:string = "";
        let sentenciaIFData:string = "";
        this.sentenciasIf.forEach(seIf => {
            sentenciaIFData += seIf.translate();
        });
        data += `if(${this.condicion.translate()}){\n${sentenciaIFData}}`;
        if(this.elseIf != undefined){
            data += `else ${this.elseIf.translate()}`;
        }else if(this.sentenciasElse != undefined){
            let senteciasElseData:string = "";
            this.sentenciasElse.forEach(element => {
                senteciasElseData += element.translate();
            });
            data += `else {\n ${senteciasElseData} \n}`;
        }

        return data;
    }
    getNameSon():string{
        return "IF";
    }
    generateGrafo():void{}
}