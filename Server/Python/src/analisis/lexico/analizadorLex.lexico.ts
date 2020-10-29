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

    private setErroList(linea:number,column:number):void{
        const newError = new ErrorAnalisis('lexico',linea,column);
        this.listError.push(newError);
    }
    private isLetter(cararter:string):boolean{
        const expresion:RegExp = new RegExp('[0-9]+')
        if(expresion.test(cararter)) return false;
        return true;

    }
    private isNumber(cararter:string):boolean{
        const expresion:RegExp = new RegExp('[0-9]+')
        return  expresion.test(cararter);

    }
    private getSizeLexema(index:number):number{
        let longitud:number = 0;
        for (index; index < this.entrada.length; index++) {
            const c:string = this.entrada.charAt(index);
            if(c == "$" || c == " " || c == "(" || c == ")" || c == "{" || c == "}" || c == "\n" || c == "\t" 
                || c == ";" || c == "\r" || c == "="){
                if(c == "\n"){
                    this.linea ++;
                    this.column = 1;
                }
                break;
            }
            longitud++;
        }
        return longitud;
    
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
                this.setTokenList(TypeToken.DPUNTOS,caracterActual)
            // -----------------> Palabres reservadas, id <--------------------------------
            }else if(this.isLetter(caracterActual)){
                const sizeLex:number = this.getSizeLexema(index);
                this.q1(index,index+sizeLex);
                index += sizeLex;
            }
            
            
            index++;
        }
    }
    // -------------> Palabras Reservadas, ID <----------------------
    private q1(actual:number,fin:number):void{
        const lexema:string = this.entrada.substring(actual,fin).toLowerCase();
        
        if(lexema == "class"){
            this.setTokenList(TypeToken.CLASS_,lexema);
            return
        }else if(lexema == "if"){
            this.setTokenList(TypeToken.IF_,lexema)
            return
        }else if(lexema == "else"){
            this.setTokenList(TypeToken.ELSE_,lexema);
            return 
        }

        while(actual < fin){
            const c:string = this.entrada.charAt(actual);
            console.log(`metodo q1: ${c}`)
            actual++;
        }

    }

}