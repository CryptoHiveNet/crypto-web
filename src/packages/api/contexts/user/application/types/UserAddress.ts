import { z } from "zod";

export type AddressType = z.infer<typeof UserAddressSchema>;

export const UserAddressSchema = z.object({
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
