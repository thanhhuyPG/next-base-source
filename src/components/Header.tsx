import { Link } from "@/navigation";

import LanguageSelector from "./LanguageSelector";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
        <div className="flex items-center gap-x-4">
          <LanguageSelector />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
