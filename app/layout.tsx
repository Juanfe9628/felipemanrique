import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Felipe Manrique - Arquitecto BIM",
  description:
    "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
  generator: "v0.app",
  metadataBase: new URL("https://www.felipemanrique.com"),
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.jpg",
  },
  openGraph: {
    title: "Felipe Manrique - Arquitecto BIM",
    description:
      "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
    type: "website",
    locale: "es_ES",
    siteName: "Felipe Manrique",
    url: "https://www.felipemanrique.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Felipe Manrique - Arquitecto BIM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Manrique - Arquitecto BIM",
    description:
      "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
