import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "NortIT | Wsparcie IT dla małych i średnich firm",
  description: "Pomoc IT dla małych i średnich firm oraz osób prywatnych w Warszawie i okolicach. Komputery, sieci, poczta, Microsoft 365 i bieżące wsparcie.",
  keywords: [
    "obsługa IT Warszawa",
    "informatyk Warszawa",
    "serwis komputerowy Warszawa",
    "IT dla małych firm",
    "IT dla średnich firm",
    "informatyk dla firmy Warszawa",
    "pomoc komputerowa Warszawa",
    "wsparcie IT",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NortIT | Wsparcie IT dla firm",
    description: "Pomoc IT dla firm i osób prywatnych w Warszawie. Komputery, sieci, poczta i bieżące wsparcie.",
    url: "/",
    siteName: "NortIT",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "NortIT, wsparcie IT dla firm" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NortIT | Wsparcie IT dla firm",
    description: "Pomoc IT dla małych i średnich firm w Warszawie i okolicach.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060914",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
