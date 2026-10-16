import { useTranslations } from "next-intl";
import { siteConfig } from "@/site.config";
import { activeChannels } from "./JoinChannels";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const t = useTranslations("Footer");
  const tJoin = useTranslations("Join");

  return (
    <footer className="bg-navy-950 text-white" data-surface="dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-white/75">{t("about")}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">{t("followUs")}</h2>
          <ul className="flex gap-2">
            {activeChannels.map((channel) => (
              <li key={channel}>
                <a
                  href={siteConfig.social[channel]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-md text-white hover:bg-white/10 hover:text-accent"
                >
                  <SocialIcon channel={channel} className="size-6" />
                  <span className="sr-only">
                    {tJoin(`channels.${channel}`)} {tJoin("newTab")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs leading-relaxed text-white/70">{t("disclaimer")}</p>
      </div>
    </footer>
  );
}
