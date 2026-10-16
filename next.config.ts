import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Statik çıktı: `next build` → `out/` klasörü. Vercel ve Amplify'da aynı şekilde servis edilir.
  output: "export",
  // `/tr/events` → `out/tr/events/index.html`; statik sunucularda (S3/Amplify) sorunsuz çalışır.
  trailingSlash: true,
  // Statik çıktıda Next.js görsel optimizasyon sunucusu yok; görseller olduğu gibi servis edilir.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
