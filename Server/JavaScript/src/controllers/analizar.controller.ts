const  Grammar  = require('../../Grammar/gramatica.js')
import {Request,Response} from 'express'
import {AST} from '../ast/AST'

export const analizar = (req:Request,res:Response) =>{
    const traduccion  = analiazarJava(req.body.Code);
    //console.log(traduccion);
    return res.status(201).json({translate:`${traduccion}`})
}


/*
class { 
    int a=0.0; 
    }

*/


function analiazarJava(codigo:string):string{
    const ast = Grammar.parse(codigo) as AST;
    //console.log(ast)
    return `${ast.translate()}`;

}