import {
    RegisterUserRequest,
    RegisterUserSchema,
} from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';

import { REGISTER } from '../../../constants/apiRoutes';

export const addUser = async (params: RegisterUserRequest) => {
    const result = RegisterUserSchema.safeParse(params);

    // ToDo: Change REGISTER with registerApiRoute
    // if (result.success) return axiosClient.post(REGISTER, params);

    // Handle mock request
    if (result.success) {
        // Wait for 2 seconds before returning the params
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return params;
    }
    throw new Error(
        `BAD_REQUEST: Parameters for ${REGISTER} are invalid!` + params,
    );
};
