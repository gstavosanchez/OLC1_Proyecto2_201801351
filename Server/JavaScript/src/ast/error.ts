export class NodoError {
    public constructor(
        public tipo:string,
        public valor:string,
        public descripcion:string,
        public line:number,
        public column:number
    ) {
        
    }
}