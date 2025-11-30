"use client"

import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tight leading-tight">
              {t({ es: "¡Hola! Soy Felipe", en: "Hello! I'm Felipe" })}
            </h1>
            <p className="text-3xl sm:text-4xl lg:text-4xl 2xl:text-5xl font-light tracking-wide leading-relaxed">
              {t({ es: "Arquitecto & Especialista en BIM", en: "Architect & BIM Specialist" })}
            </p>
            <p className="text-xl sm:text-2xl lg:text-2xl 2xl:text-3xl leading-relaxed text-muted-foreground max-w-2xl">
              {t({
                es: "Diseño espacios contemporáneos y aplico flujos BIM avanzados para lograr proyectos innovadores que combinan funcionalidad con estética.",
                en: "I design contemporary spaces and apply advanced BIM workflows to achieve innovative projects that combine functionality with aesthetics.",
              })}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex items-start justify-center lg:justify-end lg:pr-8 py-4 lg:py-6">
            <div className="relative w-full max-w-[26.6rem] lg:max-w-md 2xl:max-w-2xl h-auto transition-all duration-700 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform group-hover:rotate-3 transition-transform duration-700"></div>
              <img
                src="/images/felipe-20manrique-20photo-20bn.jpg"
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
