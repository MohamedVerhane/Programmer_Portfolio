import { MotionConfig } from "motion/react"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Services from "@/components/sections/services"
import Contact from "@/components/sections/contact"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <SiteHeader />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <SiteFooter />
      </ThemeProvider>
    </MotionConfig>
  )
}
