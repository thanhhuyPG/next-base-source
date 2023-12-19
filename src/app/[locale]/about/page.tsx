import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();
  return (
    <main>
      <p>{t("hello")}</p>
      <h1>this is about page</h1>
    </main>
  );
}

export default About;
