import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RegisterUserRequestDto } from "../../../../models/dtos/user/RegisterUserRequestDto";
import { Address } from "@/types/user/Address";

export type OnInvalidAddressErrorProps = {
  registerUserRequestDto: RegisterUserRequestDto;
  suggestedAddress?: Address;
};

export const useRegistration = () => {
  const { t } = useTranslation("common");
  const [errorMessages, setErrorMessages] = useState([]);
  const [invalidAddressError, setInvalidAddressError] = useState<
    OnInvalidAddressErrorProps | undefined
  >();
  const onLoginSuccess = () => {
    const redirectUrl = router.query?.continue || router.query?.callbackUrl;
    const redirectUrlDecoded = redirectUrl
      ? decodeURI(redirectUrl as string)
      : undefined;

    router.push(redirectUrlDecoded || Route.MyDocmorrisContextPath);
  };
  const { login } = useLoginService({
    onSuccessCallback: onLoginSuccess,
    mergeBasketProducts: false,
  });

  const registerMutation = useMutation(
    (requestDto: RegisterUserRequestDto) =>
      axiosClient
        .post<RegisterUserRequestDto>(REGISTER, requestDto)
        .catch((error: HttpError) => {
          if (error.status === HttpStatus.UNPROCESSABLE_ENTITY) {
            throw new InvalidAddressException(
              error?.data?.payload.suggestion as Address
            );
          } else if (
            error.status === HttpStatus.BAD_REQUEST ||
            error.status === HttpStatus.CONFLICT
          ) {
            throw new UnhandledBusinessException(
              error.data?.payload.errorMessages || []
            );
          } else {
            throw error;
          }
        }),
    {
      onSuccess: async (_, registerUserRequestDto) => {
        trackRegistration(
          registerUserRequestDto.consent.newsletter,
          registerUserRequestDto.consent.legal
        );

        if (hasMilestone2) {
          const recaptchaToken = await getRecaptchaToken();

          login({
            username: registerUserRequestDto.profile.loginUsername,
            password: registerUserRequestDto.password,
            recaptchaToken,
          });

          return;
        }

        const redirectUrl = getRedirectUrl(router.query);

        router.push(redirectUrl || Route.MyDocmorrisContextPath);
      },
      onError: (error, registerUserRequestDto) => {
        if (error instanceof UnhandledBusinessException) {
          setErrorMessages(
            error.errorMessages
              .filter(
                ({ severity }: NoticeMessage) => severity !== Severity.Success
              )
              .map(({ severity, message }: NoticeMessage) => ({
                severity,
                message,
              }))
          );
          trackRegistrationFailed(error.errorMessages[0]?.message);
        } else if (error instanceof InvalidAddressException) {
          setInvalidAddressError({
            registerUserRequestDto: registerUserRequestDto,
            suggestedAddress: error.suggestion,
          });
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 0);
        } else {
          trackRegistrationFailed(t("generic_mutation_error"));
          createToast({
            message: t("generic_mutation_error"),
            type: ToastType.Critical,
          });
        }
      },
    }
  );

  const submit = (requestDto: RegisterUserRequestDto) => {
    setErrorMessages([]);

    registerMutation.mutate(requestDto);
  };

  return {
    submit,
    errorMessages,
    isLoading: registerMutation.isLoading,
    invalidAddressError,
    isSuccess: registerMutation.isSuccess,
  };
};
