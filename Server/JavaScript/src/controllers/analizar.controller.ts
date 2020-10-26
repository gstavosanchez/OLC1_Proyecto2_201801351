const Grammar = require('../../Grammar/gramaticaJS.js')
import { Request, Response } from 'express'
import { AST } from '../ast/AST';
import { GrafoAST } from '../ast/grafo/grafoAST';
import path from 'path'
import fs from 'fs-extra'

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
            const grafoAST = new  GrafoAST(ast);
            const txtDot = grafoAST.getGrafo();
            console.log(txtDot)
            return {
                tipo: 'Translate',
                valor: `${ast.translate()}`
            };
        }
    } catch (error) {
        console.log(error)
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

export const uploadFile = async (req:Request,res:Response):Promise<Response> =>{
    const ruta = path.resolve(req.file.path)
    
    try {
        const archivo = await fs.readFile(ruta,'UTF-8')
        await fs.unlink(ruta);
        //console.log(archivo);
        return res.status(201).json({ code: `${archivo}` });
    } catch (error) {
        return res.status(400).json({ Error: `${error}` });       
    }
    
}
export const getFile = (req:Request,res:Response):Response =>{
    return res.send('subir imagenes');
}

export const don = (req:Request,res:Response):Response =>{
    return res.send("download file")
}