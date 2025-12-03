import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import Script from "next/script"

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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.jpg", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.jpg", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.jpg", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Felipe Manrique - Arquitecto BIM",
    description:
      "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
    type: "website",
    locale: "es_ES",
    siteName: "Felipe Manrique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Manrique - Arquitecto BIM",
    description:
      "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6K0E3NMSMS" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6K0E3NMSMS');
        `}
      </Script>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
