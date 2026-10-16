import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { JoinChannels } from "@/components/JoinChannels";

const whyItems = ["learn", "build", "network", "certify"] as const;

export default function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <>
      <section className="bg-navy text-white" data-surface="dark" aria-labelledby="hero-title">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{t("Hero.kicker")}</p>
          <h1 id="hero-title" className="mt-2 text-3xl font-extrabold leading-tight sm:text-5xl">
            {t("Hero.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">{t("Hero.description")}</p>

          <div id="join" className="mt-8 max-w-2xl scroll-mt-4">
            <h2 className="text-xl font-bold">{t("Join.title")}</h2>
            <p className="mb-4 mt-1 text-sm text-white/80">{t("Join.lead")}</p>
            <JoinChannels />
          </div>
        </div>
      </section>

      <section className="bg-surface" aria-labelledby="why-title">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 id="why-title" className="text-2xl font-bold text-navy">
            {t("Why.title")}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <li key={item} className="rounded-lg border-t-4 border-accent bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-navy">{t(`Why.items.${item}.title`)}</h3>
                <p className="mt-1 text-muted">{t(`Why.items.${item}.body`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
