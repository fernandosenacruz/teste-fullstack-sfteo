import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import router from './routers/patient';
import { errorHandler } from './middlewares/error';

const server = express();

server.use(express.json(), cors(), router, errorHandler);

export default server;
