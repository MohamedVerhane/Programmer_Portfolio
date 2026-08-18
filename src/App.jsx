import { useEffect } from "react"
import { MotionConfig } from "motion/react"
import { Provider } from "react-redux"
import { makeStore } from "@/store"
import { ThemeEffect } from "@/components/theme-provider"
import { LanguageEffect } from "@/components/language-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Services from "@/components/sections/services"
import Contact from "@/components/sections/contact"

const store = makeStore()

export default function App() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute("href")
      if (!id || id === "#") return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      history.pushState(null, "", id === "#top" ? "/" : id.slice(1))
      target.scrollIntoView({ behavior: "smooth" })
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <Provider store={store}>
      <ThemeEffect />
      <LanguageEffect />
      <MotionConfig reducedMotion="user">
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
      </MotionConfig>
    </Provider>
  )
}
