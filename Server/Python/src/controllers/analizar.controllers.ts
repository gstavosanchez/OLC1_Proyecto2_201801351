import { Request,Response } from 'express'

export const analizar= (req:Request,res:Response)=>{
    return res.status(201).json({translate:'analizando'});
}