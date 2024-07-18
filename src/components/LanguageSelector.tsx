import { Link, locales } from "@/navigation";

function LanguageSelector() {
  return (
    <div className="flex items-center gap-x-3">
      {locales.map((locale, index) => (
        <Link key={index} href="/" locale={locale}>
          <span>{locale.toUpperCase()}</span>
        </Link>
      ))}
    </div>
  );
}

export default LanguageSelector;
