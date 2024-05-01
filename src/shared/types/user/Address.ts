export enum TitleType {
  Mister = "MISTER",
  Miss = "MISS",
}

export type Address = {
  id: string;
  firstName?: string;
  lastName?: string;
  title?: TitleType;
  street: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  country: string;
  email?: string;
  phone?: string;
  mobile?: string;
  birthdayDay?: string;
  birthdayMonth?: string;
  birthdayYear?: string;
};
