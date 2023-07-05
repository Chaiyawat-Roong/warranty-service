import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";
import { deleteById, findAll, findById , insert, updateById} from "../repository/db.repository";
import { Product } from "../models/product.model";

async function findAllProduct(): Promise<Product[]>{
    try {
        const result: Product[] = await findAll()
        // console.log(typeof result);
        // console.log(result);
        return result;
      } finally {
      }
}

async function findProduct(id: string): Promise<Product[]>{
  try {
      const result: Product[] = await findById(id)
      // console.log(typeof result);
      return result;
    } finally {
    }
}

async function addProductById(product: Product): Promise<number>{
  try {
      // console.log(product)
      const result: number = await insert(product)
      return result
      // console.log(typeof result);
    } finally {
    }
}

async function updateProductById(product: Product): Promise<any>{
  try {
      // console.log(product)
      const result: number = await updateById(product)
      return result
      // console.log(typeof result);
    } finally {
    }
}

async function delProductById(id: string): Promise<number>{
  try {
      const result: number = await deleteById(id)
      return result
      // console.log(typeof result);
    } finally {
    }
}


export {findAllProduct, findProduct, addProductById, updateProductById, delProductById};