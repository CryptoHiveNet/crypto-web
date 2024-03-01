import { z } from "zod";

export type AddressDto = z.infer<typeof UserAddressDtoSchema>;

export const UserAddressDtoSchema = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().optional(),
  city: z.string(),
  houseNumber: z.string(),
  postalCode: z.string(),
  phoneNumber: z.string(),
  phoneNumberPrefix: z.string().optional(),
});
