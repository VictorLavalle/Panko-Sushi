import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panko Sushi | Menú Digital",
  description:
    "Digital menu for Panko Sushi — artisan sushi in Campeche, Campeche, México. Browse our rolls, starters, desserts and more.",
  keywords: ["sushi", "Panko Sushi", "Campeche", "menú digital", "restaurante", "comida japonesa", "rolls", "yakimeshi"],
  openGraph: {
    title: "Panko Sushi | Menú Digital",
    description: "Restaurante de sushi y algunas cositas más! Menú digital de Panko Sushi en Campeche, México.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/logo.webp", width: 512, height: 512, alt: "Panko Sushi logo" }],
  },
  twitter: {
    card: "summary",
    title: "Panko Sushi | Menú Digital",
    description: "Restaurante de sushi y algunas cositas más! Menú digital de Panko Sushi en Campeche, México.",
    images: ["/logo.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${catamaran.variable} h-full antialiased`}
      style={{ backgroundColor: "#F7F4F1" }}
    >
      <body
        className="min-h-full flex flex-col overflow-x-hidden"
        style={{
          backgroundColor: "#F7F4F1",
          fontFamily:
            '"Avenir Next", system-ui, -apple-system, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
