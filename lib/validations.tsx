import { z } from 'zod';

export const validationSchema = z.object({
  name: z
    .string({
      required_error: 'Nombre requerido',
    })
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .nonempty('El nombre no puede estar vacío'),
  email: z
    .string({ required_error: 'Email requerido' })
    .email('El email no es válido'),
  message: z.string({
    required_error: 'El mensaje no puede estar vacío',
  }),
});
