"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: { es: "Bosco della Musica", en: "Bosco della Musica" },
    type: "educational" as const,
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
      "/images/bdm-01.webp",
      "/images/bdm-02.webp",
      "/images/bdm-03.webp",
      "/images/bdm-04.webp",
      "/images/bdm-05.webp",
      "/images/bdm-06.webp",
    ],
  },
  {
    id: 2,
    title: { es: "Escuela Castel Volturno", en: "Castel Volturno School" },
    type: "educational" as const,
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
      "/images/csl-01.webp",
      "/images/csl-02.webp",
      "/images/csl-03.webp",
      "/images/csl-04.webp",
      "/images/csl-05.webp",
      "/images/csl-06.webp",
    ],
  },
  {
    id: 3,
    title: { es: "Re-Start Scampia", en: "Re-Start Scampia" },
    type: "residential" as const,
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
    images: ["/images/scampia-01.webp", "/images/scampia-02.webp", "/images/scampia-03.webp", "/images/scampia-04.webp"],
  },
  {
    id: 4,
    title: { es: "Escuela Carlo Urbani", en: "Carlo Urbani School" },
    type: "educational" as const,
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
      "/images/carlo-urbani-01.webp",
      "/images/carlo-urbani-02.webp",
      "/images/carlo-urbani-03.webp",
      "/images/carlo-urbani-04.webp",
    ],
  },
  {
    id: 5,
    title: { es: "Sweet Contrast", en: "Sweet Contrast" },
    type: "residential" as const,
    description: {
      es: "El proyecto de renovación del apartamento tuvo como objetivo crear un ambiente único a través de la experimentación con diferentes formas, materiales y colores que, a pesar de ser muy diferentes entre sí, generan juntos un equilibrio y un contraste particular que hacen de este un espacio acogedor.",
      en: "The apartment's renovation project aimed to create a unique ambient through experimentation with different shapes, materials and colors that, despite being very different from each other, together generate a balance and a particular contrast that make this a cozy space.",
    },
    contribution: {
      es: "Diseño de concepto, coordinación espacial, diseño técnico (etapas RIBA), renderizado, dibujos de sistemas técnicos, estimación de costos, permisos de construcción y supervisión de construcción",
      en: "Concept design, spatial coordination, technical design (RIBA stages), rendering, technical systems drawings, costs estimation, building permits and construction supervision",
    },
    phase: { es: "Construido", en: "Built" },
    category: "collaboration",
    year: "2022",
    location: { es: "Turín, Italia", en: "Turin, Italy" },
    cost: "€300,000",
    collaboration: "Officina 8A",
    area: "180 sqm",
    images: [
      "/images/sweet-contrast-01.webp",
      "/images/sweet-contrast-02.webp",
      "/images/sweet-contrast-03.webp",
      "/images/sweet-contrast-04.webp",
    ],
  },
  {
    id: 6,
    title: { es: "Villa M", en: "Villa M" },
    type: "residential" as const,
    description: {
      es: "Villa moderna distribuida en dos plantas, una obra arquitectónica que unifica diseño contemporáneo con funcionalidad sin compromisos. Cruzando el ingreso principal, una amplia zona de estar se ilumina con grandes ventanales que abrazan la belleza del jardín circundante. Las aberturas se asoman hacia un magnífico jardín privado, una verdadera oasis de tranquilidad y belleza. Aquí, una zona lounge exterior con cómodos divanes invita a momentos de relax bajo el cielo estrellado. Cada elemento de esta villa ha sido cuidado en los mínimos detalles. Desde las luces de atmósfera que acentúan los espacios hasta los muebles a medida realizados por artesanos expertos, cada componente contribuye a crear una experiencia de vida lujosa y sofisticada.",
      en: "Modern two-story villa, an architectural work that unifies contemporary design and functionality without compromises. Entering through the main entrance, a spacious living area is illuminated by large windows that embrace the beauty of the surrounding garden. The openings overlook a magnificent private garden, a true oasis of tranquility and beauty. Here, an outdoor lounge area with comfortable sofas invites moments of relaxation under the starry sky. Every element of this villa has been cared for in the smallest details. From atmospheric lights that accentuate the spaces to custom-made furniture crafted by expert artisans, every component contributes to creating a luxurious and sophisticated living experience.",
    },
    contribution: {
      es: "Diseño de concepto, coordinación espacial, diseño técnico (etapas RIBA), renderizado, dibujos de sistemas técnicos, estimación de costos, permisos de construcción y supervisión de construcción",
      en: "Concept design, spatial coordination, technical design (RIBA stages), rendering, technical systems drawings, costs estimation, building permits and construction supervision",
    },
    phase: { es: "Construido", en: "Built" },
    category: "collaboration",
    year: "2022",
    location: { es: "Turín, Italia", en: "Turin, Italy" },
    cost: "€450,000",
    collaboration: "Officina 8A",
    area: "300 sqm",
    images: [
      "/images/villa-m-01.webp",
      "/images/villa-m-02.webp",
      "/images/villa-m-03.webp",
      "/images/villa-m-04.webp",
      "/images/villa-m-05.webp",
      "/images/villa-m-06.webp",
    ],
  },
  {
    id: 7,
    title: { es: "Lake View", en: "Lake View" },
    type: "residential" as const,
    description: {
      es: "Proyecto de reestructuración de un edificio de finales de los años ochenta a orillas del lago de Lugano. La arquitectura de la casa se desarrolla en altura integrándose con las características del valle circundante. La luz natural penetra en los ambientes dispuestos en diferentes niveles, creando una nueva forma de diálogo con el lago y la montaña. En todo el proyecto se ha decidido mantener una línea minimalista pero intensa. El living se caracteriza por mobiliario a medida, fruto de un estudio cuidadoso y en sintonía con los gustos del cliente. La armonía de las elecciones decorativas aporta al ambiente luz y respiración, sin desviar la atención de la vista exterior.",
      en: "Restructuring project of a late eighties building on the shores of Lake Lugano. The architecture of the house develops in height integrating with the characteristics of the surrounding valley. Natural light enters the rooms arranged on different levels, creating a new form of dialogue with the lake and the mountain. Throughout the project, it was decided to maintain a minimalist but intense line. The living area is characterized by custom-made furniture, the result of careful study and in tune with the client's tastes. The harmony of the decorative choices brings light and breath to the environment, without diverting attention from the external view.",
    },
    contribution: {
      es: "Diseño de concepto, coordinación espacial, diseño técnico (etapas RIBA), renderizado, dibujos de sistemas técnicos y estimación de costos",
      en: "Concept design, spatial coordination, technical design (RIBA stages), rendering, technical systems drawings and costs estimation",
    },
    phase: { es: "Construido", en: "Built" },
    category: "collaboration",
    year: "2023",
    location: { es: "Lugano, Suiza", en: "Lugano, Switzerland" },
    cost: "€550,000",
    collaboration: "Officina 8A",
    area: "400 sqm",
    images: [
      "/images/lake-view-01.webp",
      "/images/lake-view-02.webp",
      "/images/lake-view-03.webp",
      "/images/lake-view-04.webp",
      "/images/lake-view-05.webp",
    ],
  },
  {
    id: 8,
    title: { es: "Classic Boundary", en: "Classic Boundary" },
    type: "residential" as const,
    description: {
      es: "El proyecto de renovación del apartamento tuvo como objetivo crear un ambiente único a través de la experimentación con diferentes formas, materiales y colores que, a pesar de ser muy diferentes entre sí, generan juntos un equilibrio y un contraste particular que hacen de este un espacio acogedor.",
      en: "The apartment's renovation project aimed to create a unique ambient through experimentation with different shapes, materials and colors that, despite being very different from each other, together generate a balance and a particular contrast that make this a cozy space.",
    },
    contribution: {
      es: "Diseño de concepto, coordinación espacial, diseño técnico (etapas RIBA), renderizado, dibujos de sistemas técnicos y estimación de costos",
      en: "Concept design, spatial coordination, technical design (RIBA stages), rendering, technical systems drawings and costs estimation",
    },
    phase: { es: "Construido", en: "Built" },
    category: "collaboration",
    year: "2023",
    location: { es: "Turín, Italia", en: "Turin, Italy" },
    cost: "€350,000",
    collaboration: "Officina 8A",
    area: "200 sqm",
    images: [
      "/images/classic-boundary-01.webp",
      "/images/classic-boundary-02.webp",
      "/images/classic-boundary-03.webp",
      "/images/classic-boundary-04.webp",
      "/images/classic-boundary-05.webp",
      "/images/classic-boundary-06.webp",
    ],
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "collaboration">("all")
  const [categoryFilter, setCategoryFilter] = useState<"all" | "residential" | "educational">("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const imageCache = useRef<Set<string>>(new Set())
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)

  const filteredProjects = projects.filter((p) => {
    const matchesType = activeFilter === "all" || p.category === activeFilter
    const matchesCategory = categoryFilter === "all" || p.type === categoryFilter
    return matchesType && matchesCategory
  })

  const projectsByType = { all: filteredProjects } as Record<string, typeof projects>

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

  const getCategoryLabel = (type: string) => {
    if (type === "residential") {
      return t({ es: "Residencial", en: "Residential" })
    }
    return t({ es: "Educativo", en: "Educational" })
  }

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

          <div className="flex flex-wrap gap-4 mb-6">
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

          <div className="flex items-center gap-1 mb-12 text-sm">
            <button
              onClick={() => setCategoryFilter("all")}
              className={`px-3 py-1 transition-all duration-300 relative ${
                categoryFilter === "all"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Todo", en: "All" })}
              {categoryFilter === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
              )}
            </button>
            <span className="text-muted-foreground/30">/</span>
            <button
              onClick={() => setCategoryFilter("residential")}
              className={`px-3 py-1 transition-all duration-300 relative ${
                categoryFilter === "residential"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Residencial", en: "Residential" })}
              {categoryFilter === "residential" && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
              )}
            </button>
            <span className="text-muted-foreground/30">/</span>
            <button
              onClick={() => setCategoryFilter("educational")}
              className={`px-3 py-1 transition-all duration-300 relative ${
                categoryFilter === "educational"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t({ es: "Educativo", en: "Educational" })}
              {categoryFilter === "educational" && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
              )}
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
                    {project.collaboration?.includes("SETTANTA7") && (
                      <>
                        <span>•</span>
                        <span>{t({ es: "Colaboración con Settanta7", en: "Collaboration with Settanta7" })}</span>
                      </>
                    )}
                    {project.collaboration === "Officina 8A" && (
                      <>
                        <span>•</span>
                        <span>{t({ es: "Colaboración con Officina 8A", en: "Collaboration with Officina 8A" })}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{getCategoryLabel(project.type)}</span>
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
