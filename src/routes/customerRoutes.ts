import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'Get all customers' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get customer with id ${req.params.id}` });
});

router.post('/', (_, res) => {
  res.json({ message: 'Create customer' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete customer with id ${req.params.id}` });
});

export default router;
