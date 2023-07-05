import express, { Express, Request, Response, ErrorRequestHandler, NextFunction, RequestHandler,RequestParamHandler } from "express";

export const middle: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers['authorization'];
    // console.log(authorizationHeader);
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        const token = authorizationHeader.slice(7); // Remove 'Bearer ' from the beginning to extract the token
        // Use the token as needed
        // console.log(token);
        // console.log(process.env.SECRET_KEY);
        if(token == process.env.SECRET_KEY){
            next()
        }
        else{
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        // No Bearer token found in the Authorization header
        res.status(401).json({ message: 'Unauthorized' });
    }
}