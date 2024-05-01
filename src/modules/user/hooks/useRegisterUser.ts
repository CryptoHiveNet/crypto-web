import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Address } from "@/types/shared/types/user/Address";
import { RegisterUserRequest } from "@/types/packages/api/contexts/user/application/types/RegisterUserRequest";
import { NoticeMessage } from "@/types/shared/types/components/NoticeMessage";
import { REGISTER } from "../../shared/constants/apiRoutes";
import { HttpError } from "@/types/shared/infrastructures/http/HttpError";
import { axiosClient } from "@/types/shared/infrastructures/http/AxiosClient";
import HttpStatus from "@/types/shared/infrastructures/http/HttpStatus";
import { UnhandledBusinessException } from "@/types/shared/Errors/UnhandledBusinessException";

export type OnInvalidAddressErrorProps = {
  registerUserRequest: RegisterUserRequest;
  suggestedAddress?: Address;
};

export const useRegistration = () => {
  const { t } = useTranslation();
  const [errorMessages, setErrorMessages] = useState([] as NoticeMessage[]);
  const [invalidAddressError, setInvalidAddressError] = useState<
    OnInvalidAddressErrorProps | undefined
  >();

  const registerMutation = useMutation<unknown, HttpError, RegisterUserRequest>({
    mutationFn: async (request: RegisterUserRequest) => {
      try {
        const response = await axiosClient.post<RegisterUserRequest>(REGISTER, request);
        return response;
      } catch (error: any) {
        if (error.response && (error.response.status === HttpStatus.BAD_REQUEST || error.response.status === HttpStatus.CONFLICT)) {
          throw new UnhandledBusinessException(error.response.data?.payload.errorMessages || []);
        } else {
          throw error;
        }
      }
    },
    onSuccess: () => {
      // ToDo: This should handle the success part after the user registration.
      return true;
    },
    onError: (error: HttpError) => {
      // ToDo: this should be changed to throw an error regarding the error.
      console.log(error);
    }
  });

  const submit = (request: RegisterUserRequest) => {
    setErrorMessages([]);

    registerMutation.mutate(request);
  };

  return {
    submit,
    errorMessages,
    isPending: registerMutation.isPending,
    invalidAddressError,
    isSuccess: registerMutation.isSuccess,
  };
};
