import { Token, TypeToken } from "../lexico/token.lexico";

export class AnalizadorSintactico {
    private index: number;
    private listToken: Array<Token>;
    private preAnalisis: number;
    constructor(
        list: Array<Token>
    ) {
        this.index = 0;
        this.listToken = list;
        this.preAnalisis = -1;
    }
    /*   Metod Auxiliar verificar si de declara una var      */

    public auxDeclarVar(numerAnalisis: number): boolean {
        if (numerAnalisis == TypeToken.STRING_ || numerAnalisis == TypeToken.INT_ || numerAnalisis == TypeToken.DOUBLE_
            || numerAnalisis == TypeToken.CHAR_ || numerAnalisis == TypeToken.FLOAT_ || numerAnalisis == TypeToken.BOOLEAN_) {
            return true
        }
        return false;
    }
    // -------------> Meto de Parea 
    private parea(terminal: TypeToken): void {
        if (this.index >= this.listToken.length) {
            return;
        }
        if (this.preAnalisis == terminal) {
            console.log(`Token Correcto: ${this.listToken[this.index].getLexema()}`);
            this.index++;
            if (this.index < this.listToken.length) {
                this.preAnalisis = this.listToken[this.index].getType();
            }

        } else {
            console.log('Error sintactico en parea, no se espera token en esa posicion');
            console.log(`Token Incorrcto: ${this.listToken[this.index].getLexema()}`);

        }
    }
    // ------------------------------------------------->
    public analizar(): void {
        //Inicializar el numero del preanalicis del listado de token;
        this.preAnalisis = this.listToken[0].getType();
        this.inicio();
        console.log('Fin del analisis sintacitco');
    }

    /*
        <Inicio> -> <Def_Clase> <Otra_clase>
    */
    private inicio(): void {
        this.defClase();
        this.otraClase();
    }
    /*
        <Otra_clase> -> <Inicio> 
                      | Epsilon
    */
    private otraClase(): void {
        if (this.preAnalisis == TypeToken.PUBLIC_) {
            this.inicio();
        } else {
            /*          Epsilon         */

        }
    }
    /* 
        <Def_Clase> -> tk_public <Tipo_Class> tk_id tk_llAbre <List_Var> tk_llCierra
    
    */
    private defClase(): void {
        this.parea(TypeToken.PUBLIC_);
        this.tipoClase();
        this.parea(TypeToken.ID);
        this.parea(TypeToken.LLABRE);
        this.listVar();
        this.parea(TypeToken.LLCIERRA);
    }
    /*
        <Tipo_Class> -> tk_class
                      | tk_interface

    */
    private tipoClase(): void {
        if (this.preAnalisis == TypeToken.CLASS_) {
            this.parea(TypeToken.CLASS_);
        } else if (this.preAnalisis == TypeToken.INTERFACE_) {
            this.parea(TypeToken.INTERFACE_);
        } else {
            /*      Error Sintactico     */
            console.log('Error sintactico, no se espera token en esa posicion');
            console.log(`Token Incorrcto: ${this.listToken[this.index].getLexema()}`);
        }
    }

    /*
        <List_Var> -> <Def_Tipo_Var> <Otro_Tipo_Var>
    */

    private listVar(): void {
        this.defTipoVar();
        this.otroTipoVar();
    }
    /*
        <Def_Tipo_Var> -> <Tipo> tk_id <Otra_Var>  <Expresion> tk_pcoma
                
    */
    private defTipoVar(): void {
        if (this.auxDeclarVar(this.preAnalisis)) {
            this.tipo();
            if (this.preAnalisis == TypeToken.ID) {
                this.parea(TypeToken.ID);
                this.otraVar();
                this.expresion();
                this.parea(TypeToken.PCOMA);
            } else {
                /*      Error Sintactico     */
                //console.log('Error sintactico id, no se espera token en esa posicion');
                //console.log(`Token Incorrcto: ${this.listToken[this.index].getLexema()}`);
            }
        } else {

        }

    }
    /*
        <Otra_Var> -> tk_coma tk_id <Otra_Var>
                    | Epsilon

    */
    private otraVar(): void {
        if (this.preAnalisis == TypeToken.COMA) {
            this.parea(TypeToken.COMA);
            this.parea(TypeToken.ID);
            this.otraVar();
        } else {
            /*    Epsilon      */
        }
    }
    /*
        <Otro_Tipo_Var> -> <List_Var>
                    | Epsilon
    */
    private otroTipoVar(): void {
        if (!this.auxDeclarVar(this.preAnalisis)) {

            /*     Epsilon     */


        } else {
            this.listVar();
        }

    }
    /*
        <Tipo> -> tk_int
                | tk_string
                | tk_double
                | tk_char
                | tk_float
                | tk_boolean
    */
    private tipo(): void {
        if (this.preAnalisis == TypeToken.INT_) {
            this.parea(TypeToken.INT_);
        } else if (this.preAnalisis == TypeToken.STRING_) {
            this.parea(TypeToken.STRING_);
        } else if (this.preAnalisis == TypeToken.DOUBLE_) {
            this.parea(TypeToken.DOUBLE_);
        } else if (this.preAnalisis == TypeToken.CHAR_) {
            this.parea(TypeToken.CHAR_);
        } else if (this.preAnalisis == TypeToken.FLOAT_) {
            this.parea(TypeToken.FLOAT_);
        } else if (this.preAnalisis == TypeToken.BOOLEAN_) {
            this.parea(TypeToken.BOOLEAN_)
        } else {
            /*      Error Sintactico     */
            console.log('Error sintactico en swtich,  no se espera token en esa posicion');
            console.log(`Token Incorrcto: ${this.listToken[this.index].getLexema()}`);
        }
    }

    /*
        <Expresion> -> tk_igual <T> <ExpresionPrima>
    */

    private expresion(): void {
        if(this.preAnalisis == TypeToken.IGUAL){
            this.parea(TypeToken.IGUAL)
            this.t();
            this.expresionPrima();
        }
        
    }
    /*
        <ExpresionPrima> -> tk_mas <T> <ExpresionPrima>
                | tk_menos <T> <ExpresionPrima>
                | Epsilon
    */
    private expresionPrima(): void {
        if(this.preAnalisis == TypeToken.MAS){
            this.parea(TypeToken.MAS);
            this.t();
            this.expresionPrima();
        }else if(this.preAnalisis == TypeToken.MENOS){
            this.parea(TypeToken.MENOS);
            this.t();
            this.expresionPrima();
        }else{
            /*   Epsilon   */
        }
    }
    /*
        <T> -> <F> <TPrima>
    */
    private t(): void {
        this.f();
        this.tPrima();
    }
    /*
        <TPrima> -> tk_por <F> <TPrima>
          |  tk_division <F> <TPrima>
          | Epsilon
    */
    private tPrima(): void {    
        if(this.preAnalisis == TypeToken.POR){
            this.parea(TypeToken.POR);
            this.f();
            this.tPrima();
        }else if(this.preAnalisis == TypeToken.DIVISION){
            this.parea(TypeToken.DIVISION);
            this.f();
            this.tPrima();
        }else{

        }
    }
    /*
        <F> -> tk_pabre <Expresion> tk_pcierra
        | num
        | id
    */
    private f(): void {
        if(this.preAnalisis == TypeToken.PABRE){
            this.parea(TypeToken.PABRE);
            this.expresion();
            this.parea(TypeToken.PCIERRA);
        }else if(this.preAnalisis == TypeToken.VALOR){
            this.parea(TypeToken.VALOR);
        }else if(this.preAnalisis == TypeToken.ID){
            this.parea(TypeToken.ID)
        }else{
            console.log('Error sintactico en <F>,  no se espera token en esa posicion');
            console.log(`Token Incorrcto: ${this.listToken[this.index].getLexema()}`);
        }
    }




}