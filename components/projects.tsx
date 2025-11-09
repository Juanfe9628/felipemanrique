"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    title: { es: "Complejo Residencial Moderno", en: "Modern Residential Complex" },
    description: {
      es: "Desarrollo residencial sostenible con 50 unidades, espacios verdes y amenidades comunitarias.",
      en: "Sustainable residential development with 50 units, green spaces and community amenities.",
    },
    category: "project",
    year: "2023-2024",
    image: "/modern-residential-architecture.jpg",
  },
  {
    id: 2,
    title: { es: "Sede Corporativa", en: "Corporate Headquarters" },
    description: {
      es: "Diseño de edificio de oficinas contemporáneo que enfatiza la luz natural y espacios colaborativos.",
      en: "Contemporary office building design emphasizing natural light and collaborative spaces.",
    },
    category: "project",
    year: "2024",
    image: "/corporate-office-building.png",
  },
  {
    id: 3,
    title: { es: "Renovación de Centro Cultural", en: "Cultural Center Renovation" },
    description: {
      es: "Restauración de edificio histórico y reutilización adaptativa para programas culturales comunitarios.",
      en: "Historic building restoration and adaptive reuse for community cultural programs.",
    },
    category: "project",
    year: "2023",
    image: "/cultural-center-architecture.jpg",
  },
  {
    id: 4,
    title: { es: "Iniciativa de Planificación Urbana", en: "Urban Planning Initiative" },
    description: {
      es: "Proyecto de planificación maestra colaborativa con funcionarios de la ciudad para revitalización del centro.",
      en: "Collaborative master planning project with city officials for downtown revitalization.",
    },
    category: "collaboration",
    year: "2024",
    image: "/urban-planning-design.jpg",
  },
  {
    id: 5,
    title: { es: "Asociación con Estudio de Diseño", en: "Design Studio Partnership" },
    description: {
      es: "Empresa conjunta con firma de diseño internacional en desarrollo de resort de lujo.",
      en: "Joint venture with international design firm on luxury resort development.",
    },
    category: "collaboration",
    year: "2023",
    image: "/luxury-resort-architecture.jpg",
  },
  {
    id: 6,
    title: { es: "Investigación de Vivienda Sostenible", en: "Sustainable Housing Research" },
    description: {
      es: "Colaboración académica en soluciones innovadoras de vivienda ecológica.",
      en: "Academic collaboration on innovative eco-friendly housing solutions.",
    },
    category: "collaboration",
    year: "2023",
    image: "/sustainable-housing-design.jpg",
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "collaboration">("all")
  const { t } = useLanguage()

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded mb-6">
              {t({ es: "Portafolio", en: "Portfolio" })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t({ es: "MI EXPERIENCIA", en: "MY EXPERIENCE" })}</h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={`transition-all duration-300 ${
                activeFilter === "all" ? "bg-accent hover:bg-accent/90 scale-105" : "hover:scale-105"
              }`}
            >
              {t({ es: "Todo el Trabajo", en: "All Work" })}
            </Button>
            <Button
              variant={activeFilter === "project" ? "default" : "outline"}
              onClick={() => setActiveFilter("project")}
              className={`transition-all duration-300 ${
                activeFilter === "project" ? "bg-accent hover:bg-accent/90 scale-105" : "hover:scale-105"
              }`}
            >
              {t({ es: "Proyectos", en: "Projects" })}
            </Button>
            <Button
              variant={activeFilter === "collaboration" ? "default" : "outline"}
              onClick={() => setActiveFilter("collaboration")}
              className={`transition-all duration-300 ${
                activeFilter === "collaboration" ? "bg-accent hover:bg-accent/90 scale-105" : "hover:scale-105"
              }`}
            >
              {t({ es: "Colaboraciones", en: "Collaborations" })}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-background hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      {project.category === "collaboration"
                        ? t({ es: "Colaboración", en: "Collaboration" })
                        : t({ es: "Proyecto", en: "Project" })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {t(project.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(project.description)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
