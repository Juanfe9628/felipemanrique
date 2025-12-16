"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    number: "01",
    title: { es: "Diseño Arquitectónico", en: "Architectural Design" },
    description: {
      es: "Diseños arquitectónicos desarrollados mediante la metodología BIM, combinando creatividad, funcionalidad y practicidad. Desde conceptos iniciales hasta modelos arquitectónicos coordinados, permitiendo una visualización precisa del proyecto y la creación de espacios visualmente atractivos y listos para su construcción.",
      en: "Architectural designs that combine creativity, functionality, and practicality. From initial concepts to detailed Revit models, creating spaces that are visually compelling and fully coordinated for construction.",
    },
  },
  {
    number: "02",
    title: { es: "Dirección de Obra", en: "Construction Management" },
    description: {
      es: "Dirección y supervisión de obra para asegurar que los proyectos se desarrollen sin contratiempos, a tiempo y dentro del presupuesto. Coordinación con contratistas, seguimiento de cronogramas y control de calidad en cada fase de la construcción, garantizando que la ejecución se mantenga alineada con el proyecto definido.",
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
      es: "Consultoría para proyectos inmobiliarios basada en información clara y estratégica que respalda la toma de decisiones. Análisis de espacios, estimación de costos y evaluación de la rentabilidad de cada proyecto, brindando apoyo a desarrolladores e inversores desde la planificación hasta la viabilidad del desarrollo.",
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
          <div className="flex flex-col lg:flex-row border-t border-border/30 lg:h-[350px]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer border-b lg:border-b-0 lg:border-r border-border/30 last:border-b-0 last:border-r-0 ${
                  hoveredIndex === index || activeIndex === index
                    ? "bg-secondary/50 lg:flex-[2]"
                    : "bg-background lg:flex-1"
                }`}
                onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
                onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
                onClick={() => isTouchDevice && handleServiceClick(index)}
              >
                <div className="p-6 h-full relative">
                  <div>
                    <div className="text-4xl font-bold text-gray-300 mb-4 transition-all duration-700">
                      {service.number}
                    </div>
                    <h3
                      className={`text-lg font-bold mb-4 transition-all duration-700 ${
                        hoveredIndex === index || activeIndex === index ? "text-accent" : ""
                      }`}
                    >
                      {t(service.title)}
                    </h3>
                  </div>
                  <div
                    className={`transition-all duration-700 lg:absolute lg:left-6 lg:right-6 ${
                      hoveredIndex === index || activeIndex === index
                        ? "opacity-100 max-h-[200px]"
                        : "opacity-0 max-h-0 lg:max-h-[200px] pointer-events-none overflow-hidden"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">{t(service.description)}</p>
                  </div>
                  {isTouchDevice && (
                    <div className="lg:hidden text-xs uppercase tracking-wider text-muted-foreground/60 transition-all duration-300 border-t border-border/30 pt-3 mt-4 text-center">
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
