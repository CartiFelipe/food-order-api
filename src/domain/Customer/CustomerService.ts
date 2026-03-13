import { th } from 'zod/v4/locales';
import { AppError } from '../../errors/AppError';
import { Customer as PrismaCustomer } from '../../lib/generated/prisma/client';
import { CreateCustomerDTO } from '../../schemas/CustomerSchemas';
import Customer from './Customer';
import CustomerRepository from './CustomerRepository';

export default class CustomerService {
  public static async create(customer: CreateCustomerDTO): Promise<Customer> {
    return await CustomerRepository.create(customer);
  }
  public static async findById(id: number): Promise<Customer> {
    const customer = await CustomerRepository.getById(id);
    if (!customer) {
      throw new AppError(`Customer with id ${id} not found`, 404, '404');
    }
    return customer;
  }
  public static async findAll(): Promise<Customer[]> {
    const customers = await CustomerRepository.getAll();
    if (!customers.length) {
      throw new AppError('No customers found', 404, '404');
    }
    return customers;
  }
  public static async delete(id: number): Promise<Customer> {
    await CustomerService.findById(id);

    return await CustomerRepository.delete(id);
  }
}
