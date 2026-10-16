import { routing } from "@/i18n/routing";

// Statik çıktıda sunucu tarafı yönlendirme yok; "/" adresi varsayılan dile yönlendiren
// küçük bir HTML sayfası olarak üretilir. Vercel'de ayrıca vercel.json'daki kural da devrede.
const target = `/${routing.defaultLocale}/`;

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={target} />
      </head>
      <body>
        <a href={target}>AWS Student Builder Group</a>
      </body>
    </html>
  );
}
