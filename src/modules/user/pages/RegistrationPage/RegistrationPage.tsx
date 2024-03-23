import TextBox from "@/types/components/TextBox/TextBox";
import { TextInputType } from "@/types/types/components/textbox";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const RegistrationPage = () => {
  return (
    <div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <TextBox
          required
            type={TextInputType.text}
            labelText={t('email-place-holder')}
            placeholder={t("your-email")}
          />
        </div>
        <div>
        <TextBox
          required
            type={TextInputType.passwords}
            labelText={t('your-password')}
            placeholder={t("enter-your-password")}
          />
        </div>
        <div>
        <TextBox
          required
            type={TextInputType.passwords}
            labelText={t('repeat-your-password')}
            placeholder={t("repeat-your-password")}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              {t('terms-and-conditions')}
            </Link>
          </Label>
        </div>
        <Button type="submit">{t('register-new-user')}</Button>
      </form>
    </div>
  );
};

export default RegistrationPage;