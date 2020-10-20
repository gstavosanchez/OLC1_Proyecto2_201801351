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


    const ast = Grammar.parse(codigo) as AST;

    if(ast.getListError() != '') {
        return `${ast.getListError()}`;
    }else{
        return `${ast.translate()}`;    
    }
        
    

}

