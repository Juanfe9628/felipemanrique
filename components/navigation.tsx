"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#about", label: { es: "ACERCA DE MÍ", en: "ABOUT ME" } },
    { href: "#projects", label: { es: "PORTAFOLIO", en: "PORTFOLIO" } },
    { href: "#services", label: { es: "SERVICIOS", en: "SERVICES" } },
    { href: "#contact", label: { es: "CONTACTO", en: "CONTACT" } },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="text-lg md:text-xl font-bold tracking-tight hover:text-accent transition-colors">
              <span className="text-foreground">Felipe Manrique</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold tracking-wide hover:text-accent transition-colors relative group"
                  >
                    {t(link.label)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-xs font-semibold tracking-wide hover:text-accent transition-colors relative group"
              >
                {t({ es: "MENÚ", en: "MENU" })}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="flex items-center gap-2 border-l border-border pl-6">
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-xs font-semibold tracking-wide transition-colors ${
                    language === "es" ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ES
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-xs font-semibold tracking-wide transition-colors ${
                    language === "en" ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md animate-in fade-in duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-accent/10 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-12">
              {t({ es: "Menú", en: "Menu" })}
            </h2>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-3xl md:text-4xl font-light tracking-tight hover:text-accent transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-8 text-center">
              <p className="text-xs text-muted-foreground tracking-wide">
                © {new Date().getFullYear()} Felipe Manrique
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
