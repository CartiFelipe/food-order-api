import { z } from 'zod';

const CustomerIdParamsSchema = z.object({
  id: z.coerce
    .number('O parâmetro "id" deve ser um número válido')
    .int('O parâmetro "id" deve ser um número inteiro')
    .positive('O parâmetro "id" deve ser um número positivo'), // converte "123" -> 123 e valida
});

export default CustomerIdParamsSchema;
