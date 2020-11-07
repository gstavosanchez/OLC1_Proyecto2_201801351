export enum TypeToken {
    PUNTO,
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

export const translateType = (type:TypeToken):string => {
    switch(type){
        case TypeToken.LLABRE: return "Llave Abre";
        case TypeToken.LLCIERRA:return "Llave Cierra";
        case TypeToken.PABRE:return "Parantesis Abre";
        case TypeToken.PCIERRA:return "Parantesis Cierra";

        case TypeToken.PCOMA:return "Punto y Coma";
        case TypeToken.COMA:return "Coma";
        case TypeToken.IGUAL:return "Igual";
        case TypeToken.COMPARACION:return "Comparacion";
        case TypeToken.ADICION:return "Incremento";
        case TypeToken.MAS:return "Mas";
        case TypeToken.SUSTACCION:return "Decremento";
        case TypeToken.MENOS:return "Menos";
        case TypeToken.POR:return "Por";
        case TypeToken.DIVISION:return "Division";

        case TypeToken.MENOR:return "Menor";
        case TypeToken.MAYOR:return "Mayor";
        case TypeToken.DIFERENTE:return "Diferente";
        case TypeToken.AND:return "And";
        case TypeToken.OR:return "Or";
        case TypeToken.NOT:return "Not";
        case TypeToken.XOR:return "Xor";
        case TypeToken.TRUE_:return "Boolean";
        case TypeToken.FALSE_:return "Boolean";
        case TypeToken.DPUNTOS:return "Dos puntos";

        case TypeToken.INT_:return "Int";
        case TypeToken.STRING_:return "String";
        case TypeToken.BOOLEAN_:return "Boolean";
        case TypeToken.CHAR_:return "Char";
        case TypeToken.FLOAT_:return "Float";
        case TypeToken.DOUBLE_:return "Double";
        case TypeToken.VOID_:return "Void";
        case TypeToken.PRINT_:return "Print";
        case TypeToken.PRINTLN_:return "Println";

        case TypeToken.SYSTEM:return "System";
        case TypeToken.OUT:return "Out";
        case TypeToken.WHILE_:return "While";
        case TypeToken.IF_:return "If";
        case TypeToken.ELSE_:return "Else";
        case TypeToken.CLASS_:return "Class";
        case TypeToken.INTERFACE_:return "Interface";
        case TypeToken.RETURN_:return "Return";
        case TypeToken.BREAK_:return "Break";

        case TypeToken.CONTINUE_:return "Continue";
        case TypeToken.MAIN_:return "Main";
        case TypeToken.ARG_:return "Arg";
        case TypeToken.PUBLIC_:return "Public";
        case TypeToken.STATIC_:return "Static";
        case TypeToken.DO_:return "Do";
        case TypeToken.FOR_:return "For";
        case TypeToken.CADENA:return "Cadena";
        case TypeToken.ID:return "Id";
        case TypeToken.NUMERO:return "Numero";
        case TypeToken.VALOR:return "Valor";
        case TypeToken.PUNTO:return "Punto";
        
        default : return ""
    }
}

