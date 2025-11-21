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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Felipe Manrique - Arquitecto BIM",
    description:
      "Arquitecto & Especialista en BIM. Diseño espacios contemporáneos aplicando flujos BIM avanzados para proyectos innovadores.",
    type: "website",
    locale: "es_ES",
    siteName: "Felipe Manrique",
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
