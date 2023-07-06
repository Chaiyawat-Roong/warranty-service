import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";
import { getClient } from "../configs/db.config";
import { Product } from "../models/product.model";
import { QueryResult } from "pg";

async function findAll(): Promise<any>{
    const client = await getClient();
    try {
        const result: QueryResult = await client.query('SELECT * FROM public.products ORDER BY id');
        return result.rows;
      }catch(err){
        console.log(err)
      }
      finally {
        client.release()
      }
}

async function findById(id: string): Promise<any>{
    const client = await getClient();
    try {
        const query = {
            text: "SELECT * FROM public.products WHERE id = $1",
            values: [
                id
            ]
        }
        const result: QueryResult = await client.query(query);
        return result.rows;
      }catch(err){
        console.log(err)
      }
      finally {
        client.release()
      }
}

async function insert(product: Product): Promise<any>{
    const client = await getClient();
    try {
        const query = {
            text: "INSERT INTO products (id, name, serial, date, expTime, expType, insurer) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            values: [
                product.id,
                product.name,
                product.serial,
                product.date,
                product.exptime,
                product.exptype,
                product.insurer
            ]
        }
        const result: QueryResult = await client.query(query);
        return result.rowCount;
      }catch(err){
        console.log(err)
      }
      finally {
        client.release()
      }
}

async function updateById(product: Product): Promise<any>{
  const client = await getClient();
  try {
    console.log("product date " + typeof(product.date) + product.date)
    let date: Date = new Date(product.date!)
      const query = {
          text: "UPDATE products SET name = $2, serial = $3, date = $4, expTime = $5, expType = $6, insurer = $7 WHERE id = $1",
          values: [
              product.id,
              product.name,
              product.serial,
              new Date(date!.setDate(date!.getDate() + 1)),
              product.exptime,
              product.exptype,
              product.insurer,
          ]
      }
      const result: QueryResult = await client.query(query);
      return result.rowCount;
    }catch(err){
      console.log(err)
    }
    finally {
      client.release()
    }
}

async function deleteById(id: string): Promise<any>{
  const client = await getClient();
  try {
      const query = {
          text: "DELETE FROM products WHERE id = $1;",
          values: [
              id
          ]
      }
      const result: QueryResult = await client.query(query);
      return result.rowCount;
    }catch(err){
      console.log(err)
      console.log("err เด้อ")
    }
    finally {
      client.release()
    }
}

export {findAll, findById, insert, updateById, deleteById};
