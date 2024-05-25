import { z, ZodParsedType, ZodType } from 'zod';

import { GenderType } from '@/types/shared/types/user/userProfile';

export type RegisterUserRequest = z.infer<typeof RegisterUserSchema>;

export const RegisterUserSchema = z.object({
    loginUserName: z.string(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    gender: z.nativeEnum(GenderType),
    dateOfBirth: z.date(),
    phoneNumber: z.string(),
    phoneNumberPrefix: z.string().optional(),
    password: z.string(),
});
