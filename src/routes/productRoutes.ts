import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'Get all products' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get product with id ${req.params.id}` });
});

router.post('/', (_, res) => {
  res.json({ message: 'Create product' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete product with id ${req.params.id}` });
});

export default router;
