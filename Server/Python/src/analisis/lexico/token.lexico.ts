export enum TypeToken {
    LLABRE,
    LLCIERRA,
    PABRE,
    PCIERRA,
    PCOMA,
    COMA,
    IGUAL,
    COMPARACION,
    ADICION,
    MAS,
    SUSTACCION,
    MENOS,
    POR,
    DIVISION,
    MENOR,
    MAYOR,
    MENORI,
    MAYORI,
    DIFERENTE,
    AND,
    OR,
    NOT,
    XOR,
    TRUE_,
    FALSE_,
    DPUNTOS,
    //// RESERVADAS
    INT_,
    STRING_,
    BOOLEAN_,
    CHAR_,
    FLOAT_,
    DOUBLE_,
    VOID_,
    PRINT_,
    PRINTLN_,
    SYSTEM,
    OUT,
    WHILE_,
    IF_,
    ELSE_,
    CLASS_,
    INTERFACE_,
    RETURN_,
    BREAK_,
    CONTINUE_,
    MAIN_,
    ARG_,
    PUBLIC_,
    STATIC_,
    DO_,
    FOR_,
    ///Cadena
    CADENA,
    ID,
    NUMERO,
    VALOR,
    ///Errores
    SINTACTICO,
    LEXICO

    
}
export class Token {
    private type:TypeToken;
    private lexema:string;
    constructor(
        type:TypeToken,
        lexema:string
    ) {
        this.type=type;
        this.lexema = lexema;
    }
    public getType():TypeToken{
        return this.type;
    }
    public getLexema():string{
        return this.lexema;
    }
}