import { Request,Response } from 'express'
import { AnalizadorLexico } from '../analisis/lexico/analizadorLex.lexico';
import { Token } from '../analisis/lexico/token.lexico';

export const analizar= (req:Request,res:Response):Response=>{
    //console.log(req.body.code)
    initAnalisis(req.body.code);    
    return res.status(201).json({translate:'analizando'});
}


const initAnalisis = (cadena:string) =>{
    // Inicio de Analisis lexico 
    const lexico:AnalizadorLexico = new AnalizadorLexico();
    console.log("----------------->Inicio Analisis lexico <------------------------")
    const listToken:Array<Token> =  lexico.analizar(cadena);
}