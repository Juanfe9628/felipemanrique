"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { text: "felipemanrique.fma@gmail.com", label: { es: "Email", en: "Email" } },
    { text: "+39 3665420617", label: { es: "Teléfono", en: "Phone" } },
    { text: { es: "Cali, Colombia", en: "Cali, Colombia" }, label: { es: "Ubicación", en: "Location" } },
  ]

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3
              ref={titleRef}
              className="text-xl font-bold uppercase mb-8 text-foreground animate-reveal transition-all duration-1000"
            >
              {t({ es: "Contacto", en: "Contact" })}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            <div className="lg:pr-12 lg:border-r border-border/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    {t({ es: "Nombre", en: "Name" })}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t({ es: "Tu nombre", en: "Your name" })}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 transition-all duration-300 focus:scale-[1.02] border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t({ es: "tu@email.com", en: "your@email.com" })}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 transition-all duration-300 focus:scale-[1.02] border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    {t({ es: "Mensaje", en: "Message" })}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t({
                      es: "Cuéntame sobre tu proyecto...",
                      en: "Tell me about your project...",
                    })}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="transition-all duration-300 focus:scale-[1.02] border-border/50"
                  />
                </div>
                {submitSuccess && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    {t({ es: "¡Mensaje enviado con éxito!", en: "Message sent successfully!" })}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t({ es: "ENVIANDO...", en: "SENDING..." })
                    : t({ es: "ENVIAR MENSAJE", en: "SEND MESSAGE" })}
                </Button>
              </form>
            </div>

            <div className="lg:pl-12 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t({ es: "Trabajemos Juntos", en: "Let's Work Together" })}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {t({
                    es: "Siempre estoy interesado en escuchar sobre nuevos proyectos arquitectónicos y oportunidades. Ya sea que tengas una pregunta o quieras discutir tu visión, no dudes en contactarme.",
                    en: "I'm always interested in hearing about new architectural projects and opportunities. Whether you have a question or want to discuss your vision, feel free to reach out.",
                  })}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:translate-x-2 group border-l-2 border-accent/20 hover:border-accent"
                  >
                    <div className="flex flex-col flex-1">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                        {t(info.label)}
                      </p>
                      <p className="text-sm font-semibold">
                        {typeof info.text === "string" ? info.text : t(info.text)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Felipe Manrique.{" "}
                  {t({ es: "Todos los derechos reservados.", en: "All rights reserved." })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
