import { axiosClient } from "@/types/shared/infrastructures/http/AxiosClient";
import { REGISTER } from "../../../constants/apiRoutes";
import {
  RegisterUserRequest,
  RegisterUserSchema,
} from "@/types/packages/api/contexts/user/application/types/RegisterUserRequest";

export const addUser = (params: RegisterUserRequest) => {
  const result = RegisterUserSchema.safeParse(params);

  // ToDo: Change REGISTER with registerApiRoute
  if (result.success) return axiosClient.post(REGISTER, params);

  throw new Error(
    `BAD_REQUEST: Parameters for ${REGISTER} are invalid!` + params
  );
};
