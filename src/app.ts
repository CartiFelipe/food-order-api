import express from 'express';
import { Request, Response, NextFunction } from 'express';
import router from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/', router);
app.use(ErrorHandler);

export default app;
