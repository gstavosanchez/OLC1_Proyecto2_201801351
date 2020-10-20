const  Grammar  = require('../../Grammar/gramaticaJS.js')
import {Request,Response} from 'express'
import { AST } from '../ast/AST';
//import {AST} from '../ast/AST'

export const analizar = (req:Request,res:Response) =>{
    const traduccion  = analiazarJava(req.body.Code);
    //console.log(traduccion);
    return res.status(201).json({translate:`${traduccion}`})
    
}





function analiazarJava(codigo:string):string{
    try {
        const ast = Grammar.parse(codigo) as AST;
        return `${ast.translate()}`;    
    } catch (error) {
        //console.log('Error:',error)
        return error;
    }
    

}

