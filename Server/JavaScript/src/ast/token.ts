import fs from 'fs-extra'
export class TokenList {
    private line:number;
    private column:number;
    private tipo:string;
    private descripcion:string;

    constructor(
        line:number,
        column:number,
        tipo:string,
        descripcion:string
    ) {
        this.line = line;
        this.column = column;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    public getLine():number{
        return this.line;
    }
    public getColumn():number{
        return this.column;
    }

    public getTipo():string{
        return this.tipo;
    }

    public getDescription():string{
        return this.descripcion;
    }


}

export const generateReport = async (lista:Array<TokenList>) =>{
    let data:string = "# Reporte de Tokens \n"
    data += "### Reporte de tokens con ***jison*** para la traduccion de JavaScript \n"
    data += "| No | Linea | Columna | Tipo | Descripcion |\n|----|------|---------|------|-------------|\n";
    if(lista.length !=0  || lista != null){
        lista.forEach((token,index) => {
            data += `| **${index}** | ${token.getLine()} | ${token.getColumn()} | ${token.getTipo()} | ${token.getDescription()} |\n`
        });
    }

    await fs.writeFile(`uploads/reportJS.md`,data)
    
}