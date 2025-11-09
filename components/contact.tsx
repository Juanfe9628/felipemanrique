"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", label: { es: "Teléfono", en: "Phone" } },
    { icon: Mail, text: "hola@felipemanrique.com", label: { es: "Email", en: "Email" } },
    { icon: MapPin, text: { es: "Nueva York, NY", en: "New York, NY" }, label: { es: "Ubicación", en: "Location" } },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded mb-6">
              {t({ es: "Contacto", en: "Contact" })}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ es: "PONTE EN CONTACTO", en: "GET IN TOUCH" })}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-background hover:shadow-2xl transition-all duration-500">
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
                    className="h-12 transition-all duration-300 focus:scale-[1.02]"
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
                    className="h-12 transition-all duration-300 focus:scale-[1.02]"
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
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t({ es: "ENVIAR MENSAJE", en: "SEND MESSAGE" })}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
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
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:translate-x-2 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {t(info.label)}
                        </p>
                        <p className="text-sm font-semibold">
                          {typeof info.text === "string" ? info.text : t(info.text)}
                        </p>
                      </div>
                    </div>
                  )
                })}
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
