// Kullanım:
//   npm run qr                          → site.config.ts'teki adres için QR üretir
//   npm run qr -- https://ornek.com/tr/ → verilen adres için QR üretir
// Çıktı: qr/site-qr.svg (baskı için önerilen, sınırsız ölçeklenir) ve qr/site-qr.png (2000×2000 px)
import { mkdir } from "node:fs/promises";
import QRCode from "qrcode";
import { siteConfig } from "../site.config.ts";

const url = process.argv[2] ?? `${siteConfig.url.replace(/\/$/, "")}/tr/`;

if (url.includes("TODO")) {
  console.error(
    `Hata: site adresi henüz ayarlanmamış (${url}).\n` +
      "site.config.ts içindeki `url` alanını güncelleyin ya da adresi doğrudan verin:\n" +
      "  npm run qr -- https://alan-adiniz.com/tr/",
  );
  process.exit(1);
}

// "H" hata düzeltme seviyesi: QR'ın ~%30'u kirlense/yıpransa da okunur (stant baskısı için).
const options = { errorCorrectionLevel: "H", margin: 4, color: { dark: "#000000", light: "#ffffff" } };

await mkdir("qr", { recursive: true });
await QRCode.toFile("qr/site-qr.svg", url, { ...options, type: "svg" });
await QRCode.toFile("qr/site-qr.png", url, { ...options, type: "png", width: 2000 });

console.log(`QR kod üretildi → ${url}\n  qr/site-qr.svg\n  qr/site-qr.png`);
