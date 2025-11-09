"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    number: "01",
    title: { es: "Diseño Arquitectónico", en: "Architectural Design" },
    description: {
      es: "Creación de diseños arquitectónicos innovadores y funcionales para espacios residenciales, comerciales y públicos.",
      en: "Creating innovative and functional architectural designs for residential, commercial, and public spaces.",
    },
  },
  {
    number: "02",
    title: { es: "Planificación de Proyectos", en: "Project Planning" },
    description: {
      es: "Planificación y gestión integral de proyectos desde el concepto hasta la finalización, asegurando entrega oportuna.",
      en: "Comprehensive project planning and management from concept to completion, ensuring timely delivery.",
    },
  },
  {
    number: "03",
    title: { es: "Soluciones Sostenibles", en: "Sustainable Solutions" },
    description: {
      es: "Implementación de prácticas de diseño ecológicas y sostenibles que minimizan el impacto ambiental.",
      en: "Implementing eco-friendly and sustainable design practices that minimize environmental impact.",
    },
  },
  {
    number: "04",
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
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 bg-background hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-all duration-500">
                    {service.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{t(service.title)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
