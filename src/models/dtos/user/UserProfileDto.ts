import { GenderType } from "@/types/user/userProfile";
import { z } from "zod";

export type UserProfileDto = z.infer<typeof UserProfileDtoSchema>;

export const UserProfileDtoSchema = z.object({
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
