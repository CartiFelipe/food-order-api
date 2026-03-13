import { Router } from 'express';
import CustomerController from '../domain/Customer/CustomerController';
import ValidateHandler from '../middlewares/ValidateHandler';
import { createCustomerSchema } from '../schemas/CustomerSchemas';
import IdParamSchema from '../schemas/IdParamSchema';

const router = Router();

router.get('/', CustomerController.findAll);

router.get(
  '/:id',
  ValidateHandler(IdParamSchema, 'params'),
  CustomerController.findById,
);

router.post(
  '/',
  ValidateHandler(createCustomerSchema, 'body'),
  CustomerController.create,
);

router.delete(
  '/:id',
  ValidateHandler(IdParamSchema, 'params'),
  CustomerController.delete,
);

export default router;
