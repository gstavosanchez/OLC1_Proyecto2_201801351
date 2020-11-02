import { Token, TypeToken } from "./token.lexico";
import { ErrorAnalisis } from '../error.analisis'
export class AnalizadorLexico {

    private listToken:Array<Token>;
    private listError:Array<ErrorAnalisis>
    private entrada:string = "";
    private linea:number;
    private column:number;

    constructor() {
        this.listToken = new Array<Token>();
        this.listError = new Array<ErrorAnalisis>();
        this.linea = 1;
        this.column = 1;
    }

    public analizar(entrada:string):Array<Token>{
        this.entrada = `${entrada}$`
        this.q0();
        return this.listToken;
    }
    // ---------------------> Metodos Auxiliares <--------------------------------------------------
    private setTokenList(type:TypeToken,lexema:string):void{
        const newToken = new Token(type,lexema);
        this.listToken.push(newToken);
    }

    private setErroList(linea:number,column:number,caracter:string):void{
        const newError = new ErrorAnalisis('lexico',linea,column,caracter);
        this.listError.push(newError);
    }
    private isLetter(cararter:string):boolean{
        const expresion:RegExp = new RegExp('[a-z]+')
        return (expresion.test(cararter));
        

    }
    private isNumber(cararter:string):boolean{
        const expresion:RegExp = new RegExp('[0-9]+')
        return  expresion.test(cararter);

    }
    private getSizeLexema(index:number):number{
        let longitud:number = 0;
        for (index; index < this.entrada.length; index++) {
            const c:string = this.entrada.charAt(index);
            if(c == " " || c == "(" || c == ")" || c == "{" || c == "}" || c == "\n" || c == "\t" 
                || c == ";" || c == "\r" || c == "=" || c == "." || c == ","){
                if(c == "\n"){
                    this.linea ++;
                    this.column = 1;
                }else if(c == " "){
                    this.column ++;
                }else if(c == "\t"){
                    this.column += 4;
                }
                break;
            }
            longitud++;
        }
        return longitud;
    
    }
    private getSizeString(index:number):number{
        let longitud:number = 0;
        for (index; index < this.entrada.length; index++) {
            const c:string = this.entrada.charAt(index);
            if(c == `"`){
                break;
            }
            longitud++;
        }
        return longitud;
    
    }
    private auxSimbolo(c:string):boolean{
        if(c == ";" || c == "(" || c == ")" ||  c == "{" || c == "}" || c == "=") return true;
        return false;
    }
    private getSizeLexemaNumber(index:number):number{
        let longitud:number = 0;
        for (index; index < this.entrada.length; index++) {
            const c:string = this.entrada.charAt(index);
            if(c == " " || c == "(" || c == ")" || c == "{" || c == "}" || c == "\n" || c == "\t" 
                || c == ";" || c == "\r" || c == "="){
                if(c == "\n"){
                    this.linea ++;
                    this.column = 1;
                }else if(c == " "){
                    this.column ++;
                }else if(c == "\t"){
                    this.column += 4;
                }
                break;
                
            }
            longitud++;
        }
        return longitud;
    
    }
    public getListError():Array<ErrorAnalisis>{
        return this.listError;
    }
    // ----------------------------------------------------------------------------------------------------------------
    // --------------------------------> Inicio del analasis lexico <--------------------------------------------------
    private q0():void{
        let index:number = 0;
        while(index < this.entrada.length){
            const caracterActual:string =  this.entrada.charAt(index);
            if(caracterActual == "{"){
                this.setTokenList(TypeToken.LLABRE,caracterActual);
            }else if(caracterActual == "}"){
                this.setTokenList(TypeToken.LLCIERRA,caracterActual);
            }else if(caracterActual == "("){
                this.setTokenList(TypeToken.PABRE,caracterActual);
            }else if(caracterActual == ")"){
                this.setTokenList(TypeToken.PCIERRA,caracterActual);
            }else if(caracterActual == ";"){
                this.setTokenList(TypeToken.PCOMA,caracterActual);
            }else if(caracterActual == "+" && this.entrada.charAt(index + 1) == "++"){
                this.setTokenList(TypeToken.ADICION,"++");
            }else if(caracterActual == "-" && this.entrada.charAt(index + 1) == "-" ){
                this.setTokenList(TypeToken.SUSTACCION,"--");
            }else if(caracterActual == "+"){
                this.setTokenList(TypeToken.MAS,caracterActual)
            }else if(caracterActual == "-"){
                this.setTokenList(TypeToken.MENOR,caracterActual)
            }else if(caracterActual == "<" && this.entrada.charAt(index + 1) == "="){
                this.setTokenList(TypeToken.MENORI,"<=");
            }else if(caracterActual == ">" && this.entrada.charAt(index + 1) == "=" ){
                this.setTokenList(TypeToken.MAYORI,">=");
            }else if (caracterActual == "<"){
                this.setTokenList(TypeToken.MENOR,caracterActual);
            }else if (caracterActual == ">"){
                this.setTokenList(TypeToken.MAYOR,caracterActual);
            }else if (caracterActual == ":"){
                this.setTokenList(TypeToken.DPUNTOS,caracterActual);
            }else if(caracterActual == "="){
                this.setTokenList(TypeToken.IGUAL,caracterActual);
            }else if(caracterActual == ","){
                this.setTokenList(TypeToken.COMA,caracterActual);
            // -----------------> Palabres reservadas, id <--------------------------------
            }else if(this.isLetter(caracterActual)){
                const sizeLex:number = this.getSizeLexema(index);
                this.q1(index,index+sizeLex);
                index += sizeLex;
                continue
            }else if(this.isNumber(caracterActual)){
                const sizeLex:number = this.getSizeLexemaNumber(index);
                this.q4(index,index+sizeLex);
                index += sizeLex;
                continue
                
            }else if(caracterActual == `"`){
                const sizeLex:number = this.getSizeString(index + 1);
                this.q3(index,index + sizeLex+2);
                index += sizeLex +2;
                continue

            }else if(caracterActual == " " || caracterActual == '\n' || caracterActual == '\t' || caracterActual == "\r"){
                if( caracterActual == "\n"){
                    this.linea ++;
                    this.column = 1;
                }else if(caracterActual == " "){
                    this.column ++;
                }else if(caracterActual == "\t"){
                    this.column += 4;
                }
                index++;
                continue
            }else{
                if(caracterActual == "$" && index == this.entrada.length - 1){
                    break;
                }else{
                    this.setErroList(this.linea,this.column,caracterActual);
                }
            }
            
            
            index++;
        }
        if(this.listError.length != 0){
           /* console.log('------------------------>Errores Lexicos <---------------------------------------')
            this.listError.forEach(valor => {
                console.log(`Caracter:${valor.getCaracter()}, Ln ${valor.getLinea()}, Col ${valor.getColumn()}`)
            });
            console.log('------------------------>-----------------<---------------------------------------')
            */
        }
    }
    // -------------> Palabras Reservadas, ID <----------------------
    private q1(actual:number,fin:number):void{
        const lexema:string = this.entrada.substring(actual,fin).toLowerCase();
        
        if(lexema == "class"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.CLASS_,lexema);
            return
        }else if(lexema == "if"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.IF_,lexema)
            return
        }else if(lexema == "else"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.ELSE_,lexema);
            return 
        }else if(lexema == "public"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.PUBLIC_,lexema);
            return
        }else if(lexema == "do"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.DO_,lexema);
            return
        }else if(lexema == "while"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.WHILE_,lexema)
            return
        }else if(lexema == "for"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.FOR_,lexema);
            return
        }else if(lexema == "system"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.SYSTEM,lexema);
            return
        }else if (lexema == "out"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.OUT,lexema);
            return
        }else if(lexema == "print"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.PRINT_,lexema);
            return
        }else if (lexema == "println"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.PRINTLN_,lexema);
            return 
        }else if (lexema == 'interface'){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.INTERFACE_,lexema);
            return
        }else if (lexema == "return"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.RETURN_,lexema);
            return;
        }else if (lexema == "break"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.BREAK_,lexema);
            return
        }else if (lexema == "continue"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.CONTINUE_,lexema);
            return 
        }else if (lexema == "main"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.MAIN_,lexema);
            return 
        }else if (lexema == "args"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.ARG_,lexema);
            return
        }else if(lexema == "static"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.STATIC_,lexema);
            return
        }else if(lexema == "string"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.STRING_,lexema);
            return
        }else if (lexema == "int"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.INT_,lexema);
            return;
        }else if (lexema == "double"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.DOUBLE_,lexema);
            return
        }else if (lexema == "char"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.CHAR_,lexema);
            return
        }else if(lexema == "float"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.FLOAT_,lexema);
            return
        }else if (lexema == "void"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.VOID_,lexema);
            return
        }else if (lexema == "boolean"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.BOOLEAN_,lexema);
            return
        }else if(lexema == 'true'){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.TRUE_,lexema);
        }else if(lexema == "false"){
            this.column += (lexema.length);
            this.setTokenList(TypeToken.FALSE_,lexema);
            return
        }
        
        while(actual < fin){
           const c:string = this.entrada.charAt(actual);
            if(this.isLetter(c)){
                this.q2(actual,fin);
                break
            }else{
                this.setErroList(this.linea,this.column,c);
                break;
            }
        }

    }

    // -------------> Si empieza con letra para los id ID <----------------------
    private q2(actual:number,fin:number):void{
        let c:string = '';
        let lexema:string = "";
        while(actual < fin){
            c = this.entrada.charAt(actual).toLowerCase();
            if(this.isLetter(c)){
                lexema += c;
                if(actual + 1 == fin){
                    this.setTokenList(TypeToken.ID,lexema);
                    
                }
            }else if(this.isNumber(c)){
                lexema += c;
                if(actual + 1 == fin){
                    this.setTokenList(TypeToken.ID,lexema);
                    
                }
            }else if(c == "_"){
                lexema += c;
                if(actual + 1 == fin){
                    this.setTokenList(TypeToken.ID,lexema);
                    
                }
            }else{
                this.setErroList(this.linea,this.column,c);
                break;
            }
            actual++;
            this.column ++;
            
        }
    }
    // -------------> Para valor de string <----------------------
    private q3(actual:number,fin:number){
        const lexema:string = this.entrada.substring(actual,fin);
        //console.log(lexema)
        this.column += (lexema.length);
        this.setTokenList(TypeToken.VALOR,lexema);
    }

    // -------------> Para valor de int,double,float <----------------------
    private q4(actual:number,fin:number){
        let lexema:string = "";
        while(actual < fin){
            const c:string = this.entrada.charAt(actual);
            if(this.isNumber(c)){
                lexema += c;
                if(actual + 1 == fin){
                    this.setTokenList(TypeToken.VALOR,lexema);
                }
            }else if(c == "."){
                lexema += c;
            }else{
                this.setErroList(this.linea,this.column,c);
                return;
            }
            actual++;
            this.column ++;
        }
    }

}