"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { X } from "lucide-react"

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
    location: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
    cost: "$12M USD",
    images: [
      "/modern-residential-architecture.jpg",
      "/architect-working-on-designs.jpg",
      "/sustainable-housing-design.jpg",
    ],
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
    location: { es: "Medellín, Colombia", en: "Medellín, Colombia" },
    cost: "$8.5M USD",
    images: ["/corporate-office-building.png", "/urban-planning-design.jpg", "/modern-residential-architecture.jpg"],
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
    location: { es: "Cartagena, Colombia", en: "Cartagena, Colombia" },
    cost: "$5.2M USD",
    images: [
      "/cultural-center-architecture.jpg",
      "/modern-residential-architecture.jpg",
      "/luxury-resort-architecture.jpg",
    ],
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
    location: { es: "Cali, Colombia", en: "Cali, Colombia" },
    cost: "$15M USD",
    images: ["/urban-planning-design.jpg", "/corporate-office-building.png", "/cultural-center-architecture.jpg"],
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
    location: { es: "Santa Marta, Colombia", en: "Santa Marta, Colombia" },
    cost: "$22M USD",
    images: ["/luxury-resort-architecture.jpg", "/sustainable-housing-design.jpg", "/architect-working-on-designs.jpg"],
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
    location: { es: "Manizales, Colombia", en: "Manizales, Colombia" },
    cost: "$3.8M USD",
    images: ["/sustainable-housing-design.jpg", "/modern-residential-architecture.jpg", "/urban-planning-design.jpg"],
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "collaboration">("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

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

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null)
        if (e.key === "ArrowLeft") handlePrevImage()
        if (e.key === "ArrowRight") handleNextImage()
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = "unset"
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [selectedProject, currentImageIndex])

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3
              ref={titleRef}
              className="text-xl font-bold uppercase tracking-[0.3em] mb-8 text-foreground animate-reveal"
            >
              {t({ es: "Portafolio", en: "Portfolio" })}
            </h3>
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
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-background hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
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
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{t(project.description)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4 md:p-8">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full h-full max-w-7xl flex flex-col md:flex-row gap-8 overflow-auto">
            {/* Carousel */}
            <div className="flex-1 flex items-center justify-center relative">
              <button
                onClick={handlePrevImage}
                className="absolute left-4 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors text-2xl"
                aria-label="Previous image"
              >
                ←
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${t(selectedProject.title)} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <button
                onClick={handleNextImage}
                className="absolute right-4 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors text-2xl"
                aria-label="Next image"
              >
                →
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-foreground w-8" : "bg-foreground/30"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="md:w-80 flex flex-col gap-6 py-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">{t(selectedProject.title)}</h2>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {selectedProject.category === "collaboration"
                    ? t({ es: "Colaboración", en: "Collaboration" })
                    : t({ es: "Proyecto", en: "Project" })}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-muted-foreground uppercase text-xs mb-1">{t({ es: "Año", en: "Year" })}</p>
                  <p className="font-medium">{selectedProject.year}</p>
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <p className="text-muted-foreground uppercase text-xs mb-1">
                    {t({ es: "Ubicación", en: "Location" })}
                  </p>
                  <p className="font-medium">{t(selectedProject.location)}</p>
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <p className="text-muted-foreground uppercase text-xs mb-1">{t({ es: "Costo", en: "Cost" })}</p>
                  <p className="font-medium">{selectedProject.cost}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-muted-foreground leading-relaxed">{t(selectedProject.description)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
