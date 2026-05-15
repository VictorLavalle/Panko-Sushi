import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pankosushi.netlify.app"),
  title: "Panko Sushi | Menú Digital",
  description:
    "Digital menu for Panko Sushi — artisan sushi in Campeche, Campeche, México. Browse our rolls, starters, desserts and more.",
  keywords: ["sushi", "Panko Sushi", "Campeche", "menú digital", "restaurante", "comida japonesa", "rolls", "yakimeshi"],
  openGraph: {
    title: "Panko Sushi | Menú Digital",
    description: "🍣 Rollos, Yakimeshi, Gohan y más. Haz tu pedido por WhatsApp. Abierto Lun-Sáb 6:30-11pm en Campeche.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/logo.webp", width: 512, height: 512, alt: "Panko Sushi logo" }],
  },
  twitter: {
    card: "summary",
    title: "Panko Sushi | Menú Digital",
    description: "🍣 Rollos, Yakimeshi, Gohan y más. Haz tu pedido por WhatsApp. Abierto Lun-Sáb 6:30-11pm en Campeche.",
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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
