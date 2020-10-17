import { Sentencia } from "../Sentencia";
import { Type } from "../Tipo";

export class Class extends Sentencia {
    private type:Type;
    private id:string;
    private sentencias:Array<Sentencia>;

    constructor(
        type:Type,
        id:string,
        sentencias:Array<Sentencia>,
        line:number,
        column:number
    ) {
        super(line,column);
        this.type = type;
        this.id = id;
        this.sentencias = sentencias;
    }
    translate():string{
        switch(this.type){
            case Type.MAIN: return this.getTranslateClass("class");
            case Type.INTERFACE :return this.getTranslateClass("interface");
            case Type.CLASS: return this.getTranslateClass("class");
            default:return "";
        }
    }
    getNameSon():string{return "CLASS"}

    private getTranslateClass(tipo:string):string{
        if(this.sentencias == null && tipo == "class"|| this.sentencias.length == 0 && tipo == "class") return `class ${this.id} {}`
        if(this.sentencias == null && tipo == "interface"|| this.sentencias.length == 0 && tipo == "interface") return `interface ${this.id} {}`

        let data:string = `${tipo} ${this.id} {\n`
        let listaSetencias:string  = ""
        this.sentencias.forEach(element => {
            listaSetencias += element.translate();
        });
        data += `${listaSetencias}\n`;

        return data+"\n}\n";
    }
}