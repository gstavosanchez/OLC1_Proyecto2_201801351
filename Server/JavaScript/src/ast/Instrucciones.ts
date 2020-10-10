export abstract class Instruccion{

    public constructor(
        public line:Number = 0,
        public column:Number = 0 
    ){}

    abstract translate():string;

    abstract getNameSon():string;

}