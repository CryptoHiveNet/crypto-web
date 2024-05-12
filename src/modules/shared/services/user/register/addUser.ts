import { axiosClient } from "@/types/shared/infrastructures/http/AxiosClient";
import { REGISTER } from "../../../constants/apiRoutes";
import { RegisterUserRequest } from "@/types/packages/api/contexts/user/application/types/RegisterUserRequest";


export const addUser = (params: RegisterUserRequest) => {
    return axiosClient.post(REGISTER, params);
};
