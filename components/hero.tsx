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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t({ es: "¡Hola! Soy Felipe", en: "Hello! I'm Felipe" })}
            </h1>
            <p className="text-3xl sm:text-4xl font-light tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {t({ es: "Arquitecto & Especialista en BIM", en: "Architect & BIM Specialist" })}
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {t({
                es: "Diseño espacios contemporáneos y aplico flujos BIM avanzados para lograr proyectos innovadores que combinan funcionalidad con estética.",
                en: "I design contemporary spaces and apply advanced BIM workflows to achieve innovative projects that combine functionality with aesthetics.",
              })}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pr-8 py-8 lg:py-12">
            <div className="relative w-full max-w-md h-auto transition-all duration-700 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform group-hover:rotate-3 transition-transform duration-700"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Felipe%20Manrique%20photo%20BN-CyChTPtg6oxtDMuykQUynV8NN5uArP.jpg"
                alt="Felipe Manrique"
                className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
