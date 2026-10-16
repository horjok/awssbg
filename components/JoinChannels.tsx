import { useTranslations } from "next-intl";
import { siteConfig, type SocialChannel } from "@/site.config";
import { SocialIcon } from "./SocialIcon";

// site.config.ts'te boş bırakılan kanallar gösterilmez.
export const activeChannels = (Object.keys(siteConfig.social) as SocialChannel[]).filter(
  (channel) => siteConfig.social[channel] !== "",
);

export function JoinChannels() {
  const t = useTranslations("Join");

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {activeChannels.map((channel) => (
        <li key={channel}>
          <a
            href={siteConfig.social[channel]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center gap-3 rounded-lg bg-accent px-4 py-3 font-semibold text-navy hover:bg-accent-hover"
          >
            <SocialIcon channel={channel} className="size-6 shrink-0" />
            <span>{t(`channels.${channel}`)}</span>
            <span className="sr-only">{t("newTab")}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
