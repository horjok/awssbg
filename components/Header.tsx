import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="bg-navy-950" data-surface="dark">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label={t("home")}>
          <Logo />
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href={{ pathname: "/", hash: "join" }}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-navy hover:bg-accent-hover sm:inline-block"
          >
            {t("join")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
