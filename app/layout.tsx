import "./globals.css";

// <html> ve <body> dile göre app/[locale]/layout.tsx içinde oluşturulur.
// Kök sayfa ("/") ve 404 sayfası kendi <html> etiketlerini kendisi verir.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
