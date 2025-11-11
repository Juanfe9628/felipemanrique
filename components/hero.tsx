"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        heroRef.current.style.opacity = `${1 - scrolled / 1000}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none"></div>

      <div className="container mx-auto relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t({ es: "HOLA! SOY", en: "HI! I'M" })}{" "}
              <span className="text-accent block mt-3">{t({ es: "FELIPE", en: "FELIPE" })}</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-medium tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {t({ es: "Arquitecto", en: "Architect" })}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {t({
                es: "Creando diseños arquitectónicos innovadores que combinan funcionalidad con excelencia estética.",
                en: "Creating innovative architectural designs that blend functionality with aesthetic excellence.",
              })}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] transition-all duration-700 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform group-hover:rotate-3 transition-transform duration-700"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Felipe%20Manrique%20photo%20BN-CyChTPtg6oxtDMuykQUynV8NN5uArP.jpg"
                alt="Felipe Manrique"
                className="relative w-full h-full object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
