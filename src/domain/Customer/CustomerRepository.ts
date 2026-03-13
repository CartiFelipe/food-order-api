import prisma from '../../lib';
import CustomerMapper from '../../mappers/CustomerMapper';
import { CreateCustomerDTO } from '../../schemas/CustomerSchemas';
import Customer from './Customer';

export default class CustomerRepository {
  static async create(customer: CreateCustomerDTO): Promise<Customer> {
    const { name, email, createdAt } = customer;
    const data = {
      name,
      email,
      createdAt: createdAt || new Date(),
    };
    return CustomerMapper.toDomain(await prisma.customer.create({ data }));
  }

  static async getAll(): Promise<Customer[]> {
    const customers = await prisma.customer.findMany();
    return customers.map(CustomerMapper.toDomain);
  }

  static async getById(id: number): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({ where: { id } });
    return customer ? CustomerMapper.toDomain(customer) : null;
  }

  static async delete(id: number) {
    return CustomerMapper.toDomain(
      await prisma.customer.delete({ where: { id } }),
    );
  }
}
