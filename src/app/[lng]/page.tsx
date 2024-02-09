import Link from "next/link";
import { useTranslation } from "../../utils/i18n";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>
        {t("name")}
        {t("title")}
      </h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <LanguageSwitcher />
    </>
  );
}
