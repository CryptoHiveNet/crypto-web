import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../utils/i18n/settings";

export const LanguageSwitcher = ({ t, lng }: any) => {
  return (
    <>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </>
  );
};
