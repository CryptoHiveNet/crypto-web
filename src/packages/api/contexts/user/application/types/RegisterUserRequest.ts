import { z } from "zod";
import { UserProfileSchema } from "./UserProfile";
import { UserAddressSchema } from "./UserAddress";

export type RegisterUserRequest = z.infer<typeof RegisterUserSchema>;

export const RegisterUserSchema = z.object({
  profile: UserProfileSchema,
  address: z.array(UserAddressSchema),
  password: z.string(),
});
