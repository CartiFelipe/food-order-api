import { Handler } from 'express';
import { CreateCustomerDTO } from '../../schemas/CustomerSchemas';
import CustomerService from './CustomerService';
import CustomerMapper from '../../mappers/CustomerMapper';

export default class CustomerController {
  public static create: Handler = async (req, res) => {
    const customerData: CreateCustomerDTO = req.body;
    const customer = await CustomerService.create(customerData);
    res.status(201).json(CustomerMapper.toDTO(customer));
  };

  public static findAll: Handler = async (_, res) => {
    const customers = await CustomerService.findAll();

    return res.json(customers.map(CustomerMapper.toDTO));
  };

  public static findById: Handler = async (req, res) => {
    const { id } = req.params; // runtime ok (middleware já coercionou)

    const customer = await CustomerService.findById(id as unknown as number);

    return res.json(CustomerMapper.toDTO(customer));
  };

  public static delete: Handler = async (req, res) => {
    const { id } = req.params; // runtime ok (middleware já coercionou)

    const deleted = await CustomerService.delete(id as unknown as number);
    return res.json(CustomerMapper.toDTO(deleted));
  };
}
