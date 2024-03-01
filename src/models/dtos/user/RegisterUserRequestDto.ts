import { z } from "zod";
import { UserProfileDtoSchema } from "./UserProfileDto";
import { UserAddressDtoSchema } from "./UserAddressDto";

export type RegisterUserRequestDto = z.infer<typeof RegisterUserDtoSchema>;

export const RegisterUserDtoSchema = z.object({
  profile: UserProfileDtoSchema,
  address: z.array(UserAddressDtoSchema),
  password: z.string(),
});
