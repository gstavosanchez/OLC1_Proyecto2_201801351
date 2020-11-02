const Grammar = require('../../Grammar/gramaticaJS.js')
import { json, Request, Response } from 'express'
import { AST } from '../ast/AST';
import { GrafoAST } from '../ast/grafo/grafoAST';
import path from 'path'
import fs from 'fs-extra'
import child_process from 'child_process'
import {v4 as uuidv4 } from 'uuid'


//Contenedor de dokcer ->  docker run -p 4000:4000 -it appjs bash
///docker build -t appjs .

type Respuesta = {
    tipo: string
    valor: string
    img:string
}

export const analizar = async (req: Request, res: Response):Promise<Response> => {
    const traduccion: Respuesta = await analiazarJava(req.body.Code);
    if (traduccion.tipo == 'Error') {
        return res.status(201).json({ Error: `${traduccion.valor}` });
    } else if (traduccion.tipo == 'Translate') {
        
        return res.status(201).json(traduccion);
    } else {
        return res.status(200).json({ Fatal: `${traduccion.valor}` });
    }
}

async function analiazarJava(codigo: string):Promise<Respuesta> {
    try {
        const ast = Grammar.parse(codigo) as AST;    
        if (ast.getListError() != '') {
            return {
                tipo: 'Error',
                valor: `${ast.getListError()}`,
                img:''
            };
        } else {
            const grafoAST = new  GrafoAST(ast);
            const txtDot = grafoAST.getGrafo();
            const path:string =   await generateDOT(txtDot);
            //console.log(txtDot)
            return {
                tipo: 'Translate',
                valor: `${ast.translate()}` ,
                img:path
            };
        }
    } catch (error) {
        ///console.log(error)
        return {
            tipo:'Fatal',
            valor:'Error Sintactico',
            img:''
        }
    }


}

/////////////////////////////////////////
export const uploadFile = async (req: Request, res: Response): Promise<Response> => {
    const ruta = path.resolve(req.file.path)
    //console.log(`ruta:${req.file.path}`);
    //console.log(`rutaAbsulta:${ruta}`);

    try {
        const archivo = await fs.readFile(ruta, 'UTF-8')
        await fs.unlink(ruta);
        //console.log(archivo);
        return res.status(201).json({ code: `${archivo}` });
    } catch (error) {
        return res.status(400).json({ Error: `${error}` });
    }

}


export const getFile = (req: Request, res: Response): Response => {
    return res.send('subir imagenes');

}

export const downloadFile = async (req: Request, res: Response): Promise<Response> => {
    const texto: string = req.body.Code;
    await fs.writeFile('hola.txt', texto);
    return res.status(201).json({ Succes: "Succes full" });
}

async function generateDOT(data:string):Promise<string>{
    const id:string = uuidv4();
    //console.log(id)
    await fs.writeFile(`uploads/${id}.dot`,data)

    // dot -Tpng -o
    const ruta:string = `uploads/${id}`
    const rutaABS:string = path.resolve(ruta);
    //console.log(rutaABS)
    //const command:string = `dot -Tsvg ${rutaABS}.dot -o ${rutaABS}.svg`;
    const command:string = `dot -Tpdf ${rutaABS}.dot -o ${rutaABS}.pdf`;
    child_process.exec(command);
    //await fs.unlink(`${rutaABS}.dot`);
    return `${id}.pdf`;
    
    
}