import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}
