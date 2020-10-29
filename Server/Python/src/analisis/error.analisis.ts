export class ErrorAnalisis {
    private linea:number;
    private column:number;
    private typeError:string;
    constructor(
        type:string,
        line:number,
        column:number
    ) {
        this.linea = line;
        this.column = column;
        this.typeError = type;
    }

    getLinea():number{
        return this.linea;
    }
    getColumn():number{
        return this.column;
    }
    getTypeError():string{
        return this.typeError;
    }
}