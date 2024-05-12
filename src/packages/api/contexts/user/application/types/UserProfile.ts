import { GenderType } from "@/types/shared/types/user/userProfile";
import { z } from "zod";
import { RegisterUserRequest, RegisterUserSchema } from './RegisterUserRequest';

export type UserProfileType = z.infer<typeof UserProfileSchema>;

export const UserProfileSchema = RegisterUserSchema.extend({
  userId: z.string(),
});
