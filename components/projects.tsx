"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: { es: "Bosco della Musica", en: "Bosco della Musica" },
    description: {
      es: "El proyecto consiste en la creación del nuevo Conservatorio de Música de Milán, inspirado en el bosque circundante y sus formas orgánicas. El diseño refleja la influencia de la naturaleza en las artes, haciendo eco de los orígenes de la música como emulación de sonidos naturales utilizados en ceremonias. Busca revitalizar hipotéticamente un área inaccesible, transformándola en un espacio abierto e inclusivo que cataliza la regeneración.",
      en: "The project consists in the creation of the new Milan Music Conservatory, inspired by the surrounding forest and its organic forms. The design reflects nature's influence on the arts, echoing music's origins as an emulation of natural sounds used in ceremonies. It aims to hypothetically revitalize an inaccessible area, transforming it into an open, inclusive space that catalyzes regeneration.",
    },
    contribution: {
      es: "Coordinación BIM (proyecto completo), coordinación espacial, diseño técnico del Edificio B",
      en: "BIM Coordination (entire project), spatial coordination, technical design of Building B",
    },
    phase: { es: "Fase de licitación", en: "Bidding phase" },
    category: "collaboration",
    year: "2024",
    location: { es: "Milán, Italia", en: "Milan, Italy" },
    cost: "€50,000,000",
    collaboration: "SETTANTA7 + GPA + STAIN",
    area: "21,000 sqm",
    images: [
      "/images/bdm-01.jpg",
      "/images/bdm-02.jpg",
      "/images/bdm-03.jpg",
      "/images/bdm-04.jpg",
      "/images/bdm-05.jpg",
      "/images/bdm-06.jpg",
    ],
  },
  {
    id: 2,
    title: { es: "Escuela Castel Volturno", en: "Castel Volturno School" },
    description: {
      es: "El proyecto consiste en la creación del complejo escolar más grande de Italia, con cerca de 15,000 m², en terreno recuperado de la mafia, y cubriendo aproximadamente 69,894 m². Tendrá capacidad para 1,800 estudiantes desde jardín infantil hasta niveles secundarios. El diseño, inspirado por una gota de agua en la tierra, integra el Instituto Garibaldi, el Instituto Centro Volturno y un gimnasio. El diseño presenta elementos espaciales continuos y fluidos, que recuerdan el flujo incesante del río Volturno.",
      en: "The project consists of the creation of the largest school complex in Italy, with nearly 15,000 m², on land reclaimed from the mafia, and covering approximately 69,894 m². It will have capacity for 1,800 students from kindergarten to Secondary levels. The design, inspired by a drop of water on earth, integrates the Garibaldi Institute, the Castel Volturno Centro Institute and a gym. The design features continuous and fluid spatial elements, reminiscent of the incessant flow of the Volturno River.",
    },
    contribution: {
      es: "Coordinación BIM, coordinación espacial, diseño técnico y diseño paramétrico de fachada",
      en: "BIM Coordination, spatial coordination, technical design and facade parametric design",
    },
    phase: { es: "Construcción en curso", en: "Ongoing construction" },
    category: "collaboration",
    year: "2023",
    location: { es: "Castel Volturno, Italia", en: "Castel Volturno, Italy" },
    cost: "€28,000,000",
    collaboration: "SETTANTA7 + GPA + PERILLO",
    area: "15,000 sqm",
    images: [
      "/images/csl-01.jpg",
      "/images/csl-02.jpg",
      "/images/csl-03.jpg",
      "/images/csl-04.jpg",
      "/images/csl-05.jpg",
      "/images/csl-06.jpg",
    ],
  },
  {
    id: 3,
    title: { es: "Re-Start Scampia", en: "Re-Start Scampia" },
    description: {
      es: "El proyecto ReStart Scampia transforma los 69,000 m² del antiguo Lotto M en un eco-distrito sostenible con tres edificios residenciales. Como parte de un plan de regeneración urbana más amplio, reemplaza el deteriorado Vele di Scampia con viviendas modernas y energéticamente eficientes. El diseño integra espacios verdes, zonas peatonales y áreas públicas, fomentando la interacción social. El proyecto aspira a ser un símbolo de renacimiento para el barrio, convirtiendo un área históricamente marcada por el deterioro urbano en un modelo de ciudad inteligente, resiliente e inclusiva.",
      en: "The ReStart Scampia project transforms the 69,000 m² former Lotto M into a sustainable eco-district with three residential buildings. Part of a broader urban regeneration plan, it replaces the deteriorated Vele di Scampia with modern, energy-efficient housing. The design integrates green spaces, pedestrian areas, and public areas, fostering social interaction. The project aims to be a symbol of rebirth for the neighborhood, turning an area historically marked by urban decay into a model of a smart, resilient, and inclusive city.",
    },
    contribution: {
      es: "Coordinación BIM (proyecto completo), coordinación espacial, diseño técnico del Edificio A3",
      en: "BIM Coordination (entire project), spatial coordination, technical design of Building A3",
    },
    phase: { es: "Construcción en curso", en: "Ongoing construction" },
    category: "collaboration",
    year: "2024",
    location: { es: "Nápoles, Italia", en: "Naples, Italy" },
    cost: "€30,000,000",
    collaboration: "SETTANTA7 + HB + PERILLO",
    area: "13,000 sqm",
    images: ["/images/scampia-01.jpg", "/images/scampia-02.jpg", "/images/scampia-03.jpg", "/images/scampia-04.jpg"],
  },
  {
    id: 4,
    title: { es: "Escuela Carlo Urbani", en: "Carlo Urbani School" },
    description: {
      es: 'El proyecto imagina el nuevo Complejo Escolar "Carlo Urbani", Campus "Luigi Einaudi", en Porto Sant\'Elpidio, reemplazando la instalación existente con un centro educativo moderno para aproximadamente 830 estudiantes. Reúne aulas, laboratorios, oficinas, bibliotecas y espacios recreativos dentro de tres edificios interconectados. Diseñado como un hito cívico, el complejo extiende su rol más allá de la educación al integrar instalaciones deportivas, áreas de eventos y plazas públicas abiertas después del horario escolar. La arquitectura armoniza con el contexto urbano y natural, mejorando el corredor verde de la ciudad y conectándose sin problemas con las calles circundantes.',
      en: 'The project envisions the new "Carlo Urbani" School Complex, "Luigi Einaudi" Campus, in Porto Sant\'Elpidio, replacing the existing facility with a modern educational hub for about 830 students. It brings together classrooms, laboratories, offices, libraries, and recreational spaces within three interconnected buildings. Designed as a civic landmark, the complex extends its role beyond education by integrating sports facilities, event areas, and public plazas open after school hours. The architecture harmonizes with the urban and natural context, enhancing the city\'s green corridor and connecting seamlessly with the surrounding streets.',
    },
    contribution: {
      es: "Supervisión de obra, coordinación BIM, coordinación de contratistas, detalle de construcción y soporte en control de costos",
      en: "Site supervision, BIM coordination, contractors' coordination, construction detailing, and support in cost control",
    },
    phase: { es: "Construcción en curso", en: "Ongoing construction" },
    category: "collaboration",
    year: "2025",
    location: { es: "Porto Sant'Elpidio, Italia", en: "Porto Sant'Elpidio, Italy" },
    cost: "€20,000,000",
    collaboration: "SETTANTA7 + HB + PERILLO",
    area: "10,000 sqm",
    images: [
      "/images/carlo-urbani-01.jpg",
      "/images/carlo-urbani-02.jpg",
      "/images/carlo-urbani-03.jpg",
      "/images/carlo-urbani-04.jpg",
    ],
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "collaboration">("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const imageCache = useRef<Set<string>>(new Set())
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

  useEffect(() => {
    if (selectedProject) {
      selectedProject.images.forEach((src) => {
        if (src && !imageCache.current.has(src)) {
          const img = new Image()
          img.src = src
          img.onload = () => {
            imageCache.current.add(src)
          }
        }
      })
    }
  }, [selectedProject])

  useEffect(() => {
    if (selectedProject) {
      const currentSrc = selectedProject.images[currentImageIndex]
      if (!imageCache.current.has(currentSrc)) {
        setIsImageLoading(true)
        const img = new Image()
        img.src = currentSrc
        img.onload = () => {
          imageCache.current.add(currentSrc)
          setIsImageLoading(false)
        }
      } else {
        setIsImageLoading(false)
      }
    }
  }, [selectedProject, currentImageIndex])

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
    <section id="projects" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3
              ref={titleRef}
              className="text-xl font-bold uppercase mb-8 text-foreground animate-reveal transition-all duration-1000"
            >
              {t({ es: "Portafolio", en: "Portfolio" })}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-sm uppercase tracking-wider px-6 py-2 transition-all duration-300 ${
                activeFilter === "all"
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Todo el Trabajo", en: "All Work" })}
            </button>
            <button
              onClick={() => setActiveFilter("project")}
              className={`text-sm uppercase tracking-wider px-6 py-2 transition-all duration-300 ${
                activeFilter === "project"
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Proyectos", en: "Projects" })}
            </button>
            <button
              onClick={() => setActiveFilter("collaboration")}
              className={`text-sm uppercase tracking-wider px-6 py-2 transition-all duration-300 ${
                activeFilter === "collaboration"
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Colaboraciones", en: "Collaborations" })}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
                className="cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={t(project.title)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>
                      {project.category === "collaboration"
                        ? t({ es: "Colaboración", en: "Collaboration" })
                        : t({ es: "Proyecto", en: "Project" })}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors">
                    {t(project.title)}
                  </h3>
                </div>
              </div>
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
            <div className="flex-1 flex items-center justify-center relative">
              <button
                onClick={handlePrevImage}
                className="absolute left-4 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors text-2xl"
                aria-label="Previous image"
              >
                ←
              </button>

              <div className="w-full h-full flex items-center justify-center relative">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
                  </div>
                )}
                <img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${t(selectedProject.title)} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[70vh] object-contain transition-opacity duration-200"
                  style={{ opacity: isImageLoading ? 0 : 1 }}
                />
              </div>

              <button
                onClick={handleNextImage}
                className="absolute right-4 z-10 p-3 rounded-full bg-background/80 hover:bg-background transition-colors text-2xl"
                aria-label="Next image"
              >
                →
              </button>

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

                {selectedProject.collaboration && (
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-muted-foreground uppercase text-xs mb-1">
                      {t({ es: "Colaboración con", en: "Collaboration with" })}
                    </p>
                    <p className="font-medium">{selectedProject.collaboration}</p>
                  </div>
                )}

                {selectedProject.contribution && (
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-muted-foreground uppercase text-xs mb-1">
                      {t({ es: "Contribución al proyecto", en: "Project contribution" })}
                    </p>
                    <p className="font-medium">{t(selectedProject.contribution)}</p>
                  </div>
                )}

                {selectedProject.phase && (
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-muted-foreground uppercase text-xs mb-1">{t({ es: "Fase", en: "Phase" })}</p>
                    <p className="font-medium">{t(selectedProject.phase)}</p>
                  </div>
                )}

                {selectedProject.area && (
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-muted-foreground uppercase text-xs mb-1">{t({ es: "Área", en: "Area" })}</p>
                    <p className="font-medium">{selectedProject.area}</p>
                  </div>
                )}

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
