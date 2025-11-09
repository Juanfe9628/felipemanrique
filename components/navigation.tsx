"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: { es: "INICIO", en: "HOME" } },
    { href: "#about", label: { es: "ACERCA DE", en: "ABOUT" } },
    { href: "#projects", label: { es: "PORTAFOLIO", en: "PORTFOLIO" } },
    { href: "#services", label: { es: "SERVICIOS", en: "SERVICES" } },
    { href: "#contact", label: { es: "CONTACTO", en: "CONTACT" } },
  ]

  return (
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

            <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    language === "es" ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  ES
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    language === "en" ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
