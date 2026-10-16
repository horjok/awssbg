"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const other: Locale = locale === "tr" ? "en" : "tr";

  return (
    <Link
      href={pathname}
      locale={other}
      hrefLang={other}
      aria-label={t("switchLanguage")}
      className="rounded-md border border-white/40 px-3 py-2 text-sm font-semibold text-white hover:border-accent hover:text-accent"
    >
      {other.toUpperCase()}
    </Link>
  );
}
