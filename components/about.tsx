"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg group">
              <img
                src="/architect-working-on-designs.jpg"
                alt="Felipe Manrique trabajando"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded mb-6">
              {t({ es: "Acerca de Mí", en: "About Me" })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance leading-tight">
              {t({ es: "HAGAMOS COSAS INCREÍBLES JUNTOS.", en: "LET'S DO AWESOME THINGS TOGETHER." })}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {t({ es: "Arquitecto & Especialista en Diseño", en: "Architect & Design Specialist" })}
                </span>
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t({
                  es: "Soy Felipe Manrique, un arquitecto apasionado dedicado a crear diseños innovadores y sostenibles. Con años de experiencia en proyectos residenciales y comerciales, doy vida a las visiones a través de una planificación reflexiva y ejecución creativa.",
                  en: "I'm Felipe Manrique, a passionate architect dedicated to creating innovative and sustainable designs. With years of experience in residential and commercial projects, I bring visions to life through thoughtful planning and creative execution.",
                })}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t({
                  es: "Mi enfoque combina principios arquitectónicos modernos con estética de diseño atemporal. Creo en crear espacios que no solo se vean hermosos, sino que también mejoren la calidad de vida de quienes los habitan.",
                  en: "My approach combines modern architectural principles with timeless design aesthetics. I believe in creating spaces that not only look beautiful but also enhance the quality of life for those who inhabit them.",
                })}
              </p>
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Download className="h-4 w-4 mr-2" />
              {t({ es: "DESCARGAR CV", en: "DOWNLOAD CV" })}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
