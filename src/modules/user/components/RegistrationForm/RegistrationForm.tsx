import React, { FormEventHandler, useCallback, useMemo, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { RegisterUserRequestDto } from "@api/contexts/user/application/dtos/RegisterUserRequestDto";
import { useUsersHslMigrationFeatureFlagService } from "@infrastructure/featureFlags/service/client/hooks/useUsersHslMigrationFeatureFlagService";
import { Button } from "@modules/shared/components/Button/Button";
import { ErrorMessages } from "@modules/shared/components/ErrorMessages/ErrorMessages";
import { getFormValues } from "@modules/shared/components/Forms/FormUtil";
import { NoticeMessage } from "@modules/shared/components/NoticeMessageList/NoticeMessageList";
import { Route } from "@modules/shared/constants/routes";
import { useLegacyRouter } from "@modules/shared/hooks/useLegacyRouter";
import { useLoginService } from "@modules/shared/hooks/useLoginService";
import { trackRegistrationStart } from "@modules/tracking/GTM/TrackingUtil";
import { PhoneNumberObject } from "@modules/user/components/PhoneNumberInput/PhoneNumberInput";
import { fieldValuesToRegisterUserRequestDto } from "@modules/user/components/RegistrationForm/fieldValuesToRegisterUserRequestDto";
import { getRedirectUrl } from "@modules/utils/queryHelper";

import {
  LoginInformation,
  FieldValues as LoginInformationValues,
} from "./LoginInformation/LoginInformation";
import {
  PersonalInformation,
  FieldValues as PersonalInformationValues,
} from "./PersonalInformation/PersonalInformation";
import {
  PharmaceuticalInformation,
  FieldValues as PharmaceuticalInformationValues,
} from "./PharmaceuticalInformation/PharmaceuticalInformation";
import {
  TermsOfService,
  FieldValues as TermsOfServiceValues,
} from "./TermsOfService/TermsOfService";

export type FieldValues = PersonalInformationValues &
  LoginInformationValues &
  PharmaceuticalInformationValues &
  TermsOfServiceValues;

type RegistrationFormProps = {
  submit: (registerDto: RegisterUserRequestDto) => void;
  isLoading: boolean;
  errorMessages: NoticeMessage[];
};

export const RegistrationForm = ({
  submit,
  isLoading,
  errorMessages,
}: RegistrationFormProps) => {
  const { t } = useTranslation(["user", "common", "checkout"]);
  const router = useLegacyRouter();
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const [phoneNumberObject, setPhoneNumberObject] = useState<PhoneNumberObject>(
    { phoneNumber: "", phoneNumberPrefix: "+49" }
  );
  const { hasMilestone2 } = useUsersHslMigrationFeatureFlagService();

  const [registrationWasTouched, setRegistrationWasTouched] =
    useState<boolean>(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const values = getFormValues(event) as Partial<FieldValues>;

    setWasSubmitted(true);

    if (RegistrationForm.isValid(values)) {
      submit(
        fieldValuesToRegisterUserRequestDto(
          { ...values, ...phoneNumberObject },
          hasMilestone2
        )
      );
    }
  };

  const handleOnLoginClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onCheckUserLogin();
  };

  const { loginModal, onCheckUserLogin } = useLoginService({
    loginTrackingType: "registration",
    onSuccessCallback: () => {
      const redirectUrl = getRedirectUrl(router.query);

      router.push(redirectUrl || Route.MyDocmorrisContextPath);
    },
  });

  const handlePhoneInputObjectChange = useCallback(
    (value: PhoneNumberObject) => {
      setPhoneNumberObject(value);
    },
    []
  );

  const fields = useMemo(
    () => (
      <>
        <fieldset className="mb-8">
          <PersonalInformation wasSubmitted={wasSubmitted} />
        </fieldset>

        <fieldset className="mb-8">
          <LoginInformation wasSubmitted={wasSubmitted} />
        </fieldset>

        <fieldset className="mb-8">
          <PharmaceuticalInformation
            wasSubmitted={wasSubmitted}
            onPhoneInputObjectChange={handlePhoneInputObjectChange}
          />
        </fieldset>

        <fieldset className="mb-8">
          <TermsOfService wasSubmitted={wasSubmitted} />
        </fieldset>
        <ErrorMessages errorMessageList={errorMessages} className="my-3" />
      </>
    ),
    [wasSubmitted, errorMessages, handlePhoneInputObjectChange]
  );

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onFocus={() => {
        !registrationWasTouched && trackRegistrationStart();
        setRegistrationWasTouched(true);
      }}
      data-testid="registration-form"
    >
      {fields}
      <fieldset className="mb-1 flex flex-col items-stretch gap-4">
        <Button
          label={t("user:register")}
          type="submit"
          isLoading={isLoading}
        />
        {/* TODO: DCW-1155 add text variant button */}
        <button
          type="button"
          className="text-center text-sm text-trust-green underline"
          onClick={handleOnLoginClick}
        >
          {t("user:login_now")}
        </button>
        <div className="text-center text-xs">
          <Trans i18nKey="other_ways_to_order_1" ns="checkout" />
          <a
            className="font-semibold text-grey-1 underline"
            href={"/alternativebestellwege"}
            rel="noreferrer"
            target="_blank"
          >
            {t("checkout:other_ways_to_order_link")}
          </a>
          <Trans i18nKey="other_ways_to_order_2" ns="checkout" />
        </div>
        <div className="mt-16 text-left text-xs">
          {t("user:mandatory_field_hint")}
        </div>
      </fieldset>
      {loginModal}
    </form>
  );
};

RegistrationForm.isValid = (
  values: Partial<FieldValues>
): values is FieldValues => {
  return [
    PersonalInformation,
    LoginInformation,
    PharmaceuticalInformation,
    TermsOfService,
  ].every((partialForm) => partialForm.isValid(values));
};
