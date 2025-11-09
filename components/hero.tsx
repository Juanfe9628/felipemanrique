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
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
        heroRef.current.style.opacity = `${1 - scrolled / 800}`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 geometric-bg overflow-hidden"
    >
      <div className="container mx-auto" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t({ es: "HOLA! SOY", en: "HI! I'M" })}{" "}
              <span className="text-accent block mt-2">{t({ es: "FELIPE", en: "FELIPE" })}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {t({ es: "Soy", en: "I am an" })}{" "}
              <span className="text-accent">{t({ es: "Arquitecto", en: "Architect" })}</span>
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {t({
                es: "Creando diseños arquitectónicos innovadores que combinan funcionalidad con excelencia estética.",
                en: "Creating innovative architectural designs that blend functionality with aesthetic excellence.",
              })}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square transition-transform duration-500 hover:scale-105 float-animation">
              <img
                src="/professionals/architect-1.png"
                alt="Felipe Manrique"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
