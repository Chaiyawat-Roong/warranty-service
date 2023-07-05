import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";
import { Product } from "../models/product.model";
import controller from "../controllers/product.controller"

export const router = express.Router()

router.get('/', controller.getAllProduct)

router.get('/:id', controller.getProduct)

router.post('/', controller.addProduct)

router.delete('/:id', controller.delProduct)

router.put('/', controller.updateProduct)
