import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";
import { Query } from 'express-serve-static-core';
import { router } from "./routes/test.route";
import { middle } from "./middlewares/middleware"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

const app: express.Application = express();

app.use(bodyParser.json())

app.use(middle)

app.use('/product', router)

const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(errHandler)
app.listen(port, () => console.log("Server is running!!"))

export default app;
