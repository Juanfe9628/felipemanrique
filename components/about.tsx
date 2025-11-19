"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { CVViewer } from "@/components/cv-viewer"

export function About() {
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [showCV, setShowCV] = useState(false)
  const [isLogoActive, setIsLogoActive] = useState(false)

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

  const handleShowCV = () => {
    setShowCV(true)
  }

  const handleLogoClick = () => {
    setIsLogoActive(true)
    setTimeout(() => setIsLogoActive(false), 500)
  }

  return (
    <>
      <section id="about" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1a1d20" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex items-center justify-center lg:justify-start">
              <div 
                onClick={handleLogoClick}
                className={`relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20 transition-all duration-500 ease-out hover:scale-110 hover:rotate-6 cursor-pointer group ${
                  isLogoActive ? 'scale-110 rotate-6' : ''
                }`}
              >
                <div className="text-center">
                  <div className={`text-7xl md:text-8xl font-thin text-white tracking-[0.15em] transition-all duration-500 group-hover:tracking-[0.2em] ${
                    isLogoActive ? 'tracking-[0.2em]' : ''
                  }`}>FMA</div>
                  <div className={`text-sm md:text-base font-normal tracking-[0.3em] text-gray-400 uppercase mt-4 transition-colors duration-500 group-hover:text-gray-300 ${
                    isLogoActive ? 'text-gray-300' : ''
                  }`}>
                    Felipe Manrique Arquitecto
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                ref={titleRef}
                className="text-xl font-bold uppercase mb-8 text-gray-200 animate-reveal transition-all duration-1000"
              >
                {t({ es: "Acerca de Mí", en: "About Me" })}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance leading-tight text-white">
                {t({
                  es: "Diseño y tecnología al servicio de tus proyectos",
                  en: "Design and technology at the service of your projects",
                })}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-base leading-relaxed text-gray-300">
                  <span className="font-semibold text-white">
                    {t({ es: "Arquitecto & Especialista en BIM", en: "Architect & BIM Specialist" })}
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-300">
                  {t({
                    es: "Soy Felipe Manrique, arquitecto con amplia experiencia internacional en proyectos residenciales y educativos, tanto en el sector privado como público, especializado en BIM. Combino creatividad y eficiencia digital para transformar ideas en soluciones constructivas y sostenibles.",
                    en: "I'm Felipe Manrique, an architect with extensive international experience in residential and educational projects, in both private and public sectors, specialized in BIM. I combine creativity and digital efficiency to transform ideas into constructive and sustainable solutions.",
                  })}
                </p>
                <p className="text-base leading-relaxed text-gray-300">
                  {t({
                    es: "Mi enfoque integra principios arquitectónicos modernos con flujos de trabajo BIM avanzados, asegurando que cada proyecto no solo sea estéticamente bello, sino también coordinado, eficiente y optimizado para la construcción.",
                    en: "My approach integrates modern architectural principles with advanced BIM workflows, ensuring that each project is not only aesthetically beautiful, but also coordinated, efficient, and optimized for construction.",
                  })}
                </p>
              </div>

              <button
                onClick={handleShowCV}
                className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="View Complete CV"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm font-light tracking-wide uppercase border-b border-transparent group-hover:border-white transition-all duration-300">
                  {t({ es: "Ver CV completo", en: "View complete CV" })}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CVViewer isOpen={showCV} onClose={() => setShowCV(false)} />
    </>
  )
}
