import { Router } from 'express';
import customerRoutes from './customerRoutes';
import productRoutes from './productRoutes';
const router = Router();

router.get('/', (_, res) => {
  res.send('OK, ROUTER');
});

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);

export default router;
