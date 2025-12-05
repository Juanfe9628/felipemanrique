"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    number: "01",
    title: { es: "Diseño Arquitectónico", en: "Architectural Design" },
    description: {
      es: "Diseños arquitectónicos que combinan creatividad, funcionalidad y practicidad. Desde conceptos iniciales hasta modelos detallados en Revit, creando espacios visualmente atractivos y completamente coordinados para la construcción.",
      en: "Architectural designs that combine creativity, functionality, and practicality. From initial concepts to detailed Revit models, creating spaces that are visually compelling and fully coordinated for construction.",
    },
  },
  {
    number: "02",
    title: { es: "Dirección de Obra", en: "Construction Management" },
    description: {
      es: "Los proyectos se desarrollan sin problemas, a tiempo y dentro del presupuesto. Coordinación con contratistas, seguimiento de cronogramas y mantenimiento de estándares de calidad en todas las fases de construcción.",
      en: "Projects run smoothly, on time, and within budget. Coordinating with contractors, monitoring schedules, and maintaining quality standards throughout all phases of construction.",
    },
  },
  {
    number: "03",
    title: { es: "Consultoría BIM", en: "BIM Consultancy" },
    description: {
      es: "Soluciones BIM personalizadas para optimizar flujos de trabajo y mejorar la colaboración del equipo. Coordinación de modelos, detección de interferencias, auditoría de proyectos e implementación de estándares BIM para una entrega de proyectos más eficiente.",
      en: "Tailored BIM solutions to optimize workflows and improve team collaboration. Model coordination, clash detection, project auditing, and implementation of BIM standards for more efficient project delivery.",
    },
  },
  {
    number: "04",
    title: { es: "Consultoría de Proyectos Inmobiliarios", en: "Real Estate Project Consultancy" },
    description: {
      es: "Información basada en datos para proyectos inmobiliarios utilizando modelos BIM. Planificación de espacios, estimación de costos y análisis de rentabilidad de proyectos para apoyar la toma de decisiones informadas de desarrolladores e inversores.",
      en: "Data-driven insights for real estate projects using BIM models. Space planning, cost estimation, and project profitability analysis to support informed decision-making for developers and investors.",
    },
  },
]

export function Services() {
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)

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

  const handleServiceClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
                  hoveredIndex === index || activeIndex === index
                    ? "bg-secondary/50 md:flex-[2]"
                    : "bg-background md:flex-1"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => isTouchDevice && handleServiceClick(index)}
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
                      hoveredIndex === index || activeIndex === index
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
                  </div>
                  {isTouchDevice && (
                    <div className="lg:hidden mt-4 text-xs uppercase tracking-wider text-muted-foreground/60 transition-all duration-300 border-t border-border/30 pt-3 text-center">
                      {activeIndex === index ? t({ es: "Cerrar", en: "Close" }) : t({ es: "Abrir", en: "Open" })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
