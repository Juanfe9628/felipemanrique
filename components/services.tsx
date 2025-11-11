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
            entry.target.classList.add("animate-reveal")
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
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3
              ref={titleRef}
              className="text-xl font-bold uppercase tracking-[0.3em] mb-8 text-foreground opacity-0 transition-all duration-1000"
            >
              {t({ es: "Servicios", en: "Services" })}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-border">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-r border-border last:border-r-0 ${
                  hoveredIndex === index ? "bg-secondary/50" : "bg-background"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ minHeight: "500px" }}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl font-bold text-gray-200 mb-6 transition-all duration-500">
                      {service.number}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 transition-all duration-500 ${
                        hoveredIndex === index ? "text-accent" : ""
                      }`}
                    >
                      {t(service.title)}
                    </h3>
                  </div>
                  <p
                    className={`text-muted-foreground leading-relaxed text-sm transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {t(service.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
