// Sitenin tek ayar dosyası. Linkler değişince yalnızca burayı düzenleyin.
// Bir kanal henüz yoksa değerini "" (boş) bırakın; sitede gösterilmez.

export const siteConfig = {
  // TODO: Kalıcı alan adı belli olunca güncelleyin. QR kod bu adresten üretilir.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://TODO-alan-adi.example",
  name: "AWS Student Builder Group",
  university: "Antalya Belek Üniversitesi",
  social: {
    // TODO: Gerçek linklerle değiştirin.
    instagram: "https://www.instagram.com/TODO",
    linkedin: "https://www.linkedin.com/company/TODO",
    whatsapp: "https://chat.whatsapp.com/TODO",
    discord: "",
  },
};

export type SocialChannel = keyof typeof siteConfig.social;
