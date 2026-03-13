import express from 'express';
import { Request, Response, NextFunction } from 'express';
import router from './routers';

const app = express();
app.use(express.json());
app.use('/', router);

app.use((error: Error, _: Request, res: Response, __: NextFunction) => {
  res.status(500).json({ message: error.message });
});

export default app;
