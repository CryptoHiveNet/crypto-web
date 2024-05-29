import { RoleType } from './role';

export type UserToken = {
    id: string;
    name: string;
    email: string;
    role: RoleType;
};
