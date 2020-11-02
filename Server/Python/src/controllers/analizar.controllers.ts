import { Request, Response } from 'express'
import { ErrorAnalisis } from '../analisis/error.analisis';
import { AnalizadorLexico } from '../analisis/lexico/analizadorLex.lexico';
import { Token } from '../analisis/lexico/token.lexico';
import { AnalizadorSintactico } from '../analisis/sintactico/analizadorSin.sintactico';

export const analizar = (req: Request, res: Response): Response => {
    //console.log(req.body.code)
    const respuesta:Respuesta = initAnalisis(req.body.code);
    return res.status(201).json(respuesta);
}


const initAnalisis = (cadena: string):Respuesta => {
    // Inicio de Analisis lexico 
    const lexico: AnalizadorLexico = new AnalizadorLexico();
    console.log("----------------->Inicio Analisis lexico <------------------------")
    const listToken: Array<Token> = lexico.analizar(cadena);
    listToken.forEach((token, index) => {
        console.log(`No:${index},Tipo:${token.getType()},valor:${token.getLexema()}`)
    });
    console.log("----------------->Fin Analisis lexico <------------------------")
    const listELexico:Array<ErrorAnalisis> = lexico.getListError();
    if (listELexico.length == 0) {
        console.log("")
        console.log("----------------->Incio Analisis Sintactico <------------------------")
        const sintactico: AnalizadorSintactico = new AnalizadorSintactico(listToken);
        sintactico.analizar();
    }else{
        console.log('Revisar errores lexicos')
        return {
            tipo: 'Error',
            valor: getListError(listELexico),
            img: ''
        }
    }
    return {
        tipo: 'Translate',
        valor: 'Analisi exitoso',
        img: ''
    }

}

const getListError = (lista:Array<ErrorAnalisis>):string =>{
    let data:string = "";
    lista.forEach(valor => {
        data += `Caracter:${valor.getCaracter()}, Tipo:${valor.getTypeError()} ,Ln ${valor.getLinea()}, Col ${valor.getColumn()}`
    });
    return data;
}

type Respuesta  = {
    tipo:string
    valor:string
    img:string
}