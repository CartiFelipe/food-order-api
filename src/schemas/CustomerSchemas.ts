import z from 'zod';

const createCustomerSchema = z.object({
  name: z
    .string('Name must be string')
    .min(3, 'Name must be at least 3 characters'),
  email: z.email('Email must be a valid email').min(1, 'Email is required'),
  createdAt: z.date().optional(),
});

export { createCustomerSchema };
export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>;
