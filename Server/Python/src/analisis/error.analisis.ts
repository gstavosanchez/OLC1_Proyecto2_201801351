export class ErrorAnalisis {
    private linea:number;
    private column:number;
    private typeError:string;
    private caracter:string;
    constructor(
        type:string,
        line:number,
        column:number,
        caracter:string
    ) {
        this.linea = line;
        this.column = column;
        this.typeError = type;
        this.caracter = caracter;
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
    getCaracter():string{
        return this.caracter;
    }
}