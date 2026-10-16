# AWS Student Builder Group — Antalya Belek Üniversitesi

Topluluğun web sitesi. Next.js (App Router) + TypeScript + Tailwind CSS ile yazıldı. Türkçe (`/tr`) ve İngilizce (`/en`) olarak iki dilde yayınlanıyor.
Site **statik** olarak üretiliyor: `npm run build` komutu `out/` klasörüne yalnızca HTML, CSS ve JS dosyaları yazıyor. Sunucu, veritabanı ya da CMS yok.

## Yerelde çalıştırma

Gerekenler: [Node.js](https://nodejs.org) 22 veya üstü.

```bash
npm install      # ilk seferde bir kez
npm run dev      # geliştirme sunucusu → http://localhost:3000/tr/
npm run build    # yayına hazır statik site → out/ klasörü
npm run lint     # kod kontrolü
```

## Sık yapılan değişiklikler

### Sosyal medya linkleri ve site adresi
Tümü tek dosyada: **`site.config.ts`**.
- Henüz açılmamış bir kanalın değerini `""` (boş) bırakın; o kanal sitede gösterilmez.
- `url` alanı sitenin canlı adresi. QR kod bu adresten üretiliyor.

### Arayüz metinleri
- Türkçe metinler: `messages/tr.json`
- İngilizce metinler: `messages/en.json`

İki dosyanın yapısı aynı olmalı. Bir metni değiştirirken diğer dildeki karşılığını da güncelleyin.
`_TODO` alanı sitede gösterilmez. Resmi bilgi gelince doldurulacak konuların listesi orada tutuluyor.

### Renkler
`app/globals.css` dosyasının başındaki `@theme` bloğunda tanımlı. Değeri değiştirdiğinizde tüm site güncellenir.

### Logo
Şu an geçici, metin tabanlı bir logo kullanılıyor: `components/Logo.tsx`. Gerçek logo gelince yalnızca bu dosyayı değiştirmeniz yeterli.

### Yeni etkinlik / duyuru / kaynak ekleme
*(Aşama 2 ve 3'te eklenecek; adım adım talimatlar buraya yazılacak.)*

## QR kod

```bash
npm run qr                                # site.config.ts'teki adres için
npm run qr -- https://alan-adiniz.com/tr/ # başka bir adres için
```

Komut iki dosya üretir:
- `qr/site-qr.svg`: baskı için bunu kullanın, kalite kaybı olmadan büyütülebilir.
- `qr/site-qr.png`: 2000×2000 piksel.

Adres henüz ayarlanmadıysa (içinde `TODO` geçiyorsa) script bilerek hata verir, yanlış bir QR basılmasın diye.
**Not:** Basılan QR'ın içindeki adres sonradan değiştirilemez. Bu yüzden QR'ı kalıcı bir alan adıyla üretin. Geçici `*.vercel.app` adresiyle üretilen QR'lar, siteyi başka bir yere taşıdığınızda çalışmaz.

## `SHOW_TEAM` bayrağı
*(Aşama 3'te eklenecek.)* Ekip sayfası, resmi duyuru yapılana kadar gizli tutulacak. `SHOW_TEAM=true` tanımlanmadıkça ekip sayfası build çıktısına hiç girmeyecek ve isimler hiçbir dosyada yer almayacak.

## Yayınlama (Vercel)

1. Kodu GitHub'a gönderin.
2. vercel.com üzerinde **Add New → Project** ile repoyu içe aktarın. Framework olarak Next.js otomatik algılanır, ek ayar gerekmez.
3. Ortam değişkeni (isteğe bağlı): `NEXT_PUBLIC_SITE_URL=https://alan-adiniz.com`

`vercel.json` dosyası yalnızca `/` → `/tr/` yönlendirmesini tanımlıyor. Vercel'e özel başka bir servis kullanılmıyor.

## İleride AWS Amplify'a taşıma

Site statik olduğu için taşımak kolay:

1. Amplify Console → **Create new app** → GitHub reposunu bağlayın.
2. Build ayarları (`amplify.yml`):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands: [npm ci]
       build:
         commands: [npm run build]
     artifacts:
       baseDirectory: out
       files: ['**/*']
     cache:
       paths: [node_modules/**/*]
   ```
3. **Rewrites and redirects** bölümüne şu kuralları ekleyin (`vercel.json` dosyasının karşılığı):
   | Source | Target | Type |
   |---|---|---|
   | `/` | `/tr/` | 302 |
   | `/<*>` | `/404.html` | 404 (Rewrite) |
4. Ortam değişkenlerini (`NEXT_PUBLIC_SITE_URL`, ileride `SHOW_TEAM`) Amplify'da da tanımlayın.
5. Alan adının DNS kaydını Amplify'a yönlendirin. QR kodlar aynı alan adını gösterdiği için çalışmaya devam eder.

> **Basılı QR kodlar `*.vercel.app` adresini gösteriyorsa:** Taşıma sonrasında Vercel projesini **silmeyin**.
> Vercel'de kalan kopyada `vercel.json` içeriğini aşağıdakiyle değiştirin. Böylece eski adrese gelen herkes yeni siteye yönlendirilir:
> ```json
> { "redirects": [{ "source": "/:path*", "destination": "https://YENI-ADRES/:path*", "permanent": true }] }
> ```
