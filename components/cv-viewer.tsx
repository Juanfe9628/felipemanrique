"use client"

import { useLanguage } from "@/lib/language-context"

interface CVViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function CVViewer({ isOpen, onClose }: CVViewerProps) {
  const { t, language } = useLanguage()

  if (!isOpen) return null

  const cvContent = {
    header: {
      name: "Felipe Manrique",
      title: {
        es: "Arquitecto BIM",
        en: "BIM Architect",
      },
      birthDate: {
        es: "28 Enero 1996",
        en: "28 January 1996",
      },
      location: "Cali, Colombia",
      email: "felipemanrique.fma@gmail.com",
      license: {
        es: "Arquitecto Colegiado SCA - Emitido Septiembre 2022",
        en: "Licensed Architect SCA - Issued September 2022",
      },
    },
    workExperience: {
      title: {
        es: "Experiencia Laboral",
        en: "Work Experience",
      },
      positions: [
        {
          title: {
            es: "Arquitecto BIM en Dirección de Obra",
            en: "BIM Construction Architect",
          },
          company: "Settanta 7",
          location: {
            es: "Turín, Italia | Proyectos en Milán y Porto Sant'Elpidio | 1 año",
            en: "Turin, Italy | Projects in Milan and Porto Sant'Elpidio | 1 year",
          },
          period: "2024-2025",
          description: {
            es: "Dirigí la integración y coordinación BIM para proyectos de construcción pública, asegurando una colaboración fluida entre diseño y ejecución. Gestioné detalles técnicos, documentación y BIM en obra, apoyando la dirección de obra y supervisando la calidad de ejecución.",
            en: "Led BIM integration and coordination for public construction projects, ensuring seamless collaboration between design and execution. Managed technical detailing, documentation, and on-site BIM while supporting construction supervision, overseeing execution quality.",
          },
        },
        {
          title: {
            es: "Arquitecto BIM | Coordinador BIM",
            en: "BIM Architect | BIM Coordinator",
          },
          company: "Settanta 7",
          location: {
            es: "Turín, Italia | 2 años",
            en: "Turin, Italy | 2 years",
          },
          period: "2022-2024",
          description: {
            es: "Lideré el diseño y coordinación BIM de proyectos públicos de importancia nacional, enfocándome en modelado detallado, coordinación espacial y diseño técnico durante el desarrollo del diseño, documentación de construcción y fases de permisos, asegurando integración y cumplimiento.",
            en: "Led the design and BIM coordination of public projects of national significance, focusing on detailed modeling, spatial coordination, and technical design during design development, construction documentation, and permitting phases, ensuring integration and compliance.",
          },
        },
        {
          title: {
            es: "Project Manager",
            en: "Project Manager",
          },
          company: "Officina 8A",
          location: {
            es: "Turín, Italia | 1 año",
            en: "Turin, Italy | 1 year",
          },
          period: "2021-2022",
          description: {
            es: "Gestioné proyectos de renovación privada y nuevos desarrollos desde el concepto hasta la entrega final, incluyendo compromiso con el cliente, desarrollo de diseño, permisos de construcción y coordinación de equipo. Supervisé todas las fases, asegurando alineación con los objetivos del cliente, estándares regulatorios y supervisión exitosa en obra.",
            en: "Managed private renovation and greenfield projects from concept to final delivery, including client engagement, design development, building permits, and team coordination. Oversaw all phases, ensuring alignment with client goals, regulatory standards, and successful on-site supervision.",
          },
        },
        {
          title: {
            es: "Arquitecto BIM",
            en: "BIM Architect",
          },
          company: "Officina 8A",
          location: {
            es: "Turín, Italia | 2 años",
            en: "Turin, Italy | 2 years",
          },
          period: "2019-2021",
          description: {
            es: "Diseñé y desarrollé proyectos de renovación privada y nuevos desarrollos, combinando soluciones arquitectónicas creativas con modelado BIM detallado, coordinación espacial precisa y documentación técnica integral para apoyar la ejecución fluida del proyecto.",
            en: "Designed and developed private renovation and greenfield projects, combining creative architectural solutions with detailed BIM modeling, precise spatial coordination, and comprehensive technical documentation to support seamless project execution.",
          },
        },
        {
          title: {
            es: "Practicante de Arquitectura",
            en: "Architecture Intern",
          },
          company: "Espacio Colectivo",
          location: {
            es: "Cali, Colombia | 3 meses",
            en: "Cali, Colombia | 3 months",
          },
          period: "2017",
          description: {
            es: "Produje modelos 3D y materiales de presentación para concursos nacionales de arquitectura, mostrando conceptos de diseño innovadores y narrativa visual.",
            en: "Produced 3D models and presentation materials for national architecture competitions, showcasing innovative design concepts and visual storytelling.",
          },
        },
      ],
    },
    education: {
      title: {
        es: "Educación",
        en: "Education",
      },
      degrees: [
        {
          title: {
            es: "Maestría en Arquitectura Construcción Ciudad",
            en: "Master of Science degree in Architecture Construction City",
          },
          institution: {
            es: "Politecnico di Torino - Turín, Italia",
            en: "Politecnico di Torino - Turin, Italy",
          },
          period: "2017-2019",
          score: {
            es: "Calificación Final: 110/110 Cum Laude con mención",
            en: "Final Score: 110/110 Cum Laude and mention",
          },
        },
        {
          title: {
            es: "Grado en Arquitectura",
            en: "Bachelor's degree in Architecture",
          },
          institution: {
            es: "Pontificia Universidad Javeriana - Cali, Colombia",
            en: "Pontificia Universidad Javeriana - Cali, Colombia",
          },
          period: "2013-2017",
          score: {
            es: "Calificación Final: 4.51/5.0 Galardonado con la Orden del Mérito Académico",
            en: "Final Score: 4.51/5.0 Awarded Order of Academic Merit",
          },
        },
        {
          title: {
            es: "Curso en línea - Dominio de IA en AEC",
            en: "Online course - Mastering AI in AEC",
          },
          institution: {
            es: "Aplicaciones de IA en Arquitectura, Ingeniería y Construcción (AEC)",
            en: "AI applications within Architecture, Engineering, and Construction (AEC)",
          },
          period: "2024",
          score: null,
        },
      ],
    },
    softwareSkills: {
      title: {
        es: "Habilidades de Software",
        en: "Software Skills",
      },
      categories: [
        {
          name: {
            es: "Software BIM",
            en: "BIM Software",
          },
          items: "Revit, Navisworks, Dynamo, Python",
        },
        {
          name: {
            es: "Dibujo y Modelado",
            en: "Drafting and Modeling",
          },
          items: "Autocad, Sketchup, Rhino, Grasshopper",
        },
        {
          name: {
            es: "Suite Adobe",
            en: "Adobe Suite",
          },
          items: "Illustrator, Photoshop, Indesign, Premier",
        },
        {
          name: {
            es: "Renderizado",
            en: "Rendering",
          },
          items: "3ds Max, Vray, D5, Enscape",
        },
      ],
    },
    softSkills: {
      title: {
        es: "Habilidades Blandas",
        en: "Soft Skills",
      },
      skills: {
        es: ["Liderazgo", "Resolución de problemas", "Trabajo en equipo", "Innovación"],
        en: ["Leadership", "Problem solving", "Teamwork", "Innovation"],
      },
    },
    languages: {
      title: {
        es: "Idiomas",
        en: "Languages Proficiency",
      },
      list: [
        { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
        { name: { es: "Inglés", en: "English" }, level: "C1" },
        { name: { es: "Italiano", en: "Italian" }, level: "C1" },
      ],
    },
    publications: {
      title: {
        es: "Publicaciones",
        en: "Publications",
      },
      items: [
        {
          title: {
            es: "Proyecto del año - Premios OICE 2024",
            en: "Project of the year - OICE Awards 2024",
          },
          description: {
            es: "Proyecto galardonado - Cittadella Scolastica di Castel Volturno",
            en: "Awarded project - Cittadella Scolastica di Castel Volturno",
          },
        },
      ],
    },
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Close CV"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b-2 border-gray-900">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2">{cvContent.header.name}</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">{t(cvContent.header.title)}</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>{t(cvContent.header.birthDate)}</p>
              <p>{cvContent.header.location}</p>
              <p>{cvContent.header.email}</p>
              <p>{t(cvContent.header.license)}</p>
            </div>
          </div>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.workExperience.title)}</h2>
            <div className="space-y-6">
              {cvContent.workExperience.positions.map((position, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg">{t(position.title)}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{position.period}</span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {position.company} | {t(position.location)}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{t(position.description)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.education.title)}</h2>
            <div className="space-y-6">
              {cvContent.education.degrees.map((degree, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg">{t(degree.title)}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{degree.period}</span>
                  </div>
                  <p className="text-gray-600">{t(degree.institution)}</p>
                  {degree.score && <p className="text-sm text-gray-500">{t(degree.score)}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Software Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.softwareSkills.title)}</h2>
              <div className="space-y-3">
                {cvContent.softwareSkills.categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">{t(category.name)}</h3>
                    <p className="text-sm text-gray-700">{category.items}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.softSkills.title)}</h2>
              <div className="grid grid-cols-2 gap-2">
                {cvContent.softSkills.skills[language].map((skill) => (
                  <div key={skill} className="bg-gray-100 px-3 py-2 rounded text-sm text-gray-700">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Languages & Publications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.languages.title)}</h2>
              <div className="space-y-2">
                {cvContent.languages.list.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{t(lang.name)}</span>
                    <span className="text-sm text-gray-600">
                      {typeof lang.level === "string" ? lang.level : t(lang.level)}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t(cvContent.publications.title)}</h2>
              {cvContent.publications.items.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{t(item.title)}</h3>
                  <p className="text-sm text-gray-700">{t(item.description)}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
