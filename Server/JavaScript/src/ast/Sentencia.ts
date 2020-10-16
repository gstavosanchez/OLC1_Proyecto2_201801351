export abstract class Sentencia {
    private linea:number;
    private column:number;
    public constructor(
        line:number,
        column:number
    ) {
        this.linea = line;
        this.column = column;
    }

    abstract translate():string;
    abstract getNameSon():string;
}