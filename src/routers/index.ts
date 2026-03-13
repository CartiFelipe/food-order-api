import { Handler, Router } from 'express';

const welcome: Handler = (_, res) => {
  res.send('OK');
};
const router = Router();

router.get('/', welcome);

export default router;
