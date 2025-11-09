"use client"

import { Card } from "@/components/ui/card"
import { Building2, Ruler, Lightbulb, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: Building2,
    title: { es: "Diseño Arquitectónico", en: "Architectural Design" },
    description: {
      es: "Creación de diseños arquitectónicos innovadores y funcionales para espacios residenciales, comerciales y públicos.",
      en: "Creating innovative and functional architectural designs for residential, commercial, and public spaces.",
    },
  },
  {
    icon: Ruler,
    title: { es: "Planificación de Proyectos", en: "Project Planning" },
    description: {
      es: "Planificación y gestión integral de proyectos desde el concepto hasta la finalización, asegurando entrega oportuna.",
      en: "Comprehensive project planning and management from concept to completion, ensuring timely delivery.",
    },
  },
  {
    icon: Lightbulb,
    title: { es: "Soluciones Sostenibles", en: "Sustainable Solutions" },
    description: {
      es: "Implementación de prácticas de diseño ecológicas y sostenibles que minimizan el impacto ambiental.",
      en: "Implementing eco-friendly and sustainable design practices that minimize environmental impact.",
    },
  },
  {
    icon: Users,
    title: { es: "Consultoría y Asesoría", en: "Consulting & Advisory" },
    description: {
      es: "Servicios de consultoría experta para optimización de diseño, cumplimiento de códigos y viabilidad de proyectos.",
      en: "Expert consulting services for design optimization, code compliance, and project feasibility.",
    },
  },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded mb-6">
              {t({ es: "Servicios", en: "Services" })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t({ es: "QUÉ HAGO", en: "WHAT I DO" })}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-500 bg-background hover:-translate-y-2 group"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
