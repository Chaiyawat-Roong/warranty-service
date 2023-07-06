import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";
import { deleteById, findAll, findById , insert, updateById} from "../repository/db.repository";
import { Product } from "../models/product.model";

async function findAllProduct(): Promise<Product[]>{
    try {
        const result: Product[] = await findAll()
        return result;
      } finally {
      }
}

async function findProduct(id: string): Promise<Product[]>{
  try {
      const result: Product[] = await findById(id)
      return result;
    } finally {
    }
}

async function addProductById(product: Product): Promise<number>{
  try {
      const result: number = await insert(product)
      return result
    } finally {
    }
}

async function updateProductById(product: Product): Promise<any>{
  try {
      const result: number = await updateById(product)
      return result
    } finally {
    }
}

async function delProductById(id: string): Promise<number>{
  try {
      const result: number = await deleteById(id)
      return result
    } finally {
    }
}


export {findAllProduct, findProduct, addProductById, updateProductById, delProductById};