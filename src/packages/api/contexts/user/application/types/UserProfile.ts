import { GenderType } from "@/types/shared/types/user/userProfile";
import { z } from "zod";

export type UserProfileType = z.infer<typeof UserProfileSchema>;

export const UserProfileSchema = z.object({
  userId: z.string(),
  loginUserName: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.nativeEnum(GenderType),
  dateOfBirth: z.date(),
  phoneNumber: z.string(),
  phoneNumberPrefix: z.string().optional(),
});
