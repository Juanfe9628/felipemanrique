"use client"

import { useEffect, useRef, useState } from "react"
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
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            entry.target.classList.remove("visible")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3
              ref={titleRef}
              className="text-xl font-bold uppercase mb-8 text-foreground animate-reveal transition-all duration-1000"
            >
              {t({ es: "Servicios", en: "Services" })}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row border-t border-border/30">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer border-r border-border/30 last:border-r-0 flex flex-col ${
                  hoveredIndex === index ? "bg-secondary/50 md:flex-[2]" : "bg-background md:flex-1"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ minHeight: "250px" }}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-300 mb-4 transition-all duration-700">
                      {service.number}
                    </div>
                    <h3
                      className={`text-lg font-bold mb-4 transition-all duration-700 ${
                        hoveredIndex === index ? "text-accent" : ""
                      }`}
                    >
                      {t(service.title)}
                    </h3>
                  </div>
                  <div
                    className={`transition-all duration-700 overflow-hidden ${
                      hoveredIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
