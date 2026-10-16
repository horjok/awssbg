import type { Metadata } from "next";
import Link from "next/link";
import tr from "@/messages/tr.json";
import en from "@/messages/en.json";

export const metadata: Metadata = { title: "404" };

// Bu sayfa out/404.html olarak üretilir; dili bilinmediği için iki dilde birden gösterilir.
export default function NotFound() {
  return (
    <html lang="tr">
      <body className="flex min-h-screen items-center justify-center bg-navy p-4 font-sans text-white" data-surface="dark">
        <main className="text-center">
          <p className="text-6xl font-bold text-accent">404</p>
          <h1 className="mt-4 text-xl font-semibold">{tr.NotFound.title}</h1>
          <p lang="en" className="text-white/80">{en.NotFound.title}</p>
          <p className="mt-6 flex justify-center gap-6 underline underline-offset-4">
            <Link href="/tr/">{tr.NotFound.back}</Link>
            <Link href="/en/" lang="en">{en.NotFound.back}</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
