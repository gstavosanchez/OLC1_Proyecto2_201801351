export enum Type{
    INT,
    STRING,
    BOOLEAN,
    VOID,
    DOUBLE,
    FLOAT,
    CHAR,
    CLASS,
    INTERFACE,
    MAIN
}
export enum TypeOperation{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    MAYOR,
    MENOR,
    MAYOR_IGUAL,
    MENOR_IGUAL,
    OR,
    AND,
    MENOSUNARIO,
    NOT,
    COMPARACION,
    DIFERENTE,
    ADICION,
    SUSTRACCION,
    NEGATIVO,
    XOR,
    NEGACION
}

export const translateType = (tipo:Type):string => {
    switch(tipo){
        case Type.INT : return "int";
        case Type.STRING : return "string";
        case Type.BOOLEAN : return "boolean";
        case Type.VOID : return "void";
        case Type.DOUBLE : return "double";
        case Type.FLOAT : return "float";
        case Type.CHAR : return "char";
        case Type.INTERFACE : return "interface";
        case Type.MAIN : return "main";
        case Type.CLASS : return "class";
        default: return '';

    }
    
}