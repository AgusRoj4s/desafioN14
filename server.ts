import express = require('express');
import { Request, Response } from 'express'
class Server{
    public app : express.Application; 
    constructor(private port :number){
        this.app = express();
    }
    start(callback ?: Function){
        this.app.listen(this.port);
        console.log(`Servidor escuchando en http://localhost:${this.port}`)
    }
    static init(port : number) : Server{
        return new Server(port);
    }
}

const port:number = 3000;
const server = Server.init(port);

server.app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido al Servidor express TYPESCRIPT');
})

server.start();

server.app.on('error', error => {
    console.log('error en el servidor:', error);
})

