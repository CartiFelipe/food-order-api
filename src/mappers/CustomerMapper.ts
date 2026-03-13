import Customer from '../domain/Customer/Customer';
import { Customer as PrismaCustomer } from '../lib/generated/prisma/client';
import { CreateCustomerDTO } from '../schemas/CustomerSchemas';

export default class CustomerMapper {
  static toDTO(customer: Customer): CreateCustomerDTO {
    return {
      name: customer.name,
      email: customer.email,
      createdAt: customer.createdAt,
    };
  }
  public static toDomain(row: PrismaCustomer): Customer {
    return new Customer(
      row.id,
      row.name,
      row.email,
      row.createdAt,
      row.updatedAt,
    );
  }
}
