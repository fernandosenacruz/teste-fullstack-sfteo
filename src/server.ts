import express from 'express';
import cors from 'cors';
import router from './routers/patient';

const server = express();

server.use(express.json(), cors(), router);

export default server;
