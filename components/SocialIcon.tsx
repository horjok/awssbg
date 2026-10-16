import type { SocialChannel } from "@/site.config";

// Basit çizgi ikonlar; dekoratif oldukları için ekran okuyuculardan gizlenir (yanlarında metin var).
const paths: Record<SocialChannel, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" />
    </>
  ),
  whatsapp: (
    <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20zM9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5z" />
  ),
  discord: (
    <>
      <path d="M7 7c3-1.3 7-1.3 10 0l2 9c-1.5 1.3-3 2-4.5 2.3l-1-1.8M7 7l-2 9c1.5 1.3 3 2 4.5 2.3l1-1.8M8 16c2.5 1 5.5 1 8 0" />
      <circle cx="9.5" cy="12" r="1" fill="currentColor" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" />
    </>
  ),
};

export function SocialIcon({ channel, className }: { channel: SocialChannel; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[channel]}
    </svg>
  );
}
