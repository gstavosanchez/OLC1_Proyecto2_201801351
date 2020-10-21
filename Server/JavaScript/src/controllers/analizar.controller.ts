const Grammar = require('../../Grammar/gramaticaJS.js')
import { Request, Response } from 'express'
import { AST } from '../ast/AST';
//import {AST} from '../ast/AST'

export const analizar = (req: Request, res: Response) => {
    const traduccion: Respuesta = analiazarJava(req.body.Code);
    //console.log(traduccion);

    if (traduccion.tipo == 'Error') {
        return res.status(201).json({ Error: `${traduccion.valor}` });
    } else if(traduccion.tipo == 'Translate'){
        return res.status(201).json({ Translate: `${traduccion.valor}` });
    }else{
        return res.status(400).json({ Fatal: `${traduccion.valor}` });
    }




}

function analiazarJava(codigo: string): Respuesta {
    try {
        const ast = Grammar.parse(codigo) as AST;    
        if (ast.getListError() != '') {
            return {
                tipo: 'Error',
                valor: `${ast.getListError()}`
            };
        } else {
            return {
                tipo: 'Translate',
                valor: `${ast.translate()}`
            };
        }
    } catch (error) {
        //console.log(error)
        return {
            tipo:'Fatal',
            valor:error
        }
    }


}

type Respuesta = {
    tipo: string
    valor: string
}