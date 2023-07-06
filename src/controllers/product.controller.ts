import express, { Request, Response, } from "express";
import { Product } from "../models/product.model";
import { addProductById, delProductById, findAllProduct, findProduct, updateProductById } from "../services/product.service"

async function getAllProduct(req: Request, res: Response): Promise<void> {
    try{
        const result: Product[] = await findAllProduct()
        res.json({
            message: "Authorized",
            data: result
        })
    }catch(err){
        console.log(err)
    }
}

async function getProduct(req: Request, res: Response): Promise<void> {
    try{
        const result: Product[] = await findProduct(req.params.id)
        res.json({
            message: "Authorized",
            product:  result.length == 0 ? "ไม่เจอ" : result
        })
    }catch(err){
        console.log(err)
    }
}

async function addProduct(req: Request, res: Response): Promise<void> {
    try{
        const product: Product = req.body
        const result: number = await addProductById(product)
        res.json({
            message: "Authorized",
            data: result == 1 ? "add product success" : "add product fail"
        })
    }catch(err){
        console.log(err)
    }
    
    
}

async function updateProduct(req: Request, res: Response): Promise<void> {
    try{
        const product: Product = req.body
        const result: number = await updateProductById(product)
        console.log(product.date);
    res.json({
        message: "Authorized",
        data: result == 1 ? "edit product success" : "edit product fail"
    })
    }catch(err){
        console.log(err)
    }

}

async function delProduct(req: Request, res: Response): Promise<void> {
    try{
        const result: number = await delProductById(req.params.id)
        res.json({
            message: "Authorized",
            data: result == 1 ? "del product success" : "del product fail"
        })
    }catch(err){
        console.log(err)
    }
}



export = {
    getAllProduct,
    getProduct,
    addProduct,
    delProduct,
    updateProduct
}