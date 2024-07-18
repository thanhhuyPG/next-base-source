import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations();
  return (
    <main>
      <h1 className="">{t("hello")}</h1>
    </main>
  );
}

export default Page;
