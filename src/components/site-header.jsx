import { useState } from "react"
import { TbArrowUpRight, TbMenu2, TbMoon, TbSun, TbX } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Collapse } from "@/components/ui/motion-collapse"
import { Pressable } from "@/components/ui/motion-pressable"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"

const links = [
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.services", href: "#services" },
]

function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme()
  return (
    <Pressable
      type="button"
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <TbSun className="size-5" /> : <TbMoon className="size-5" />}
    </Pressable>
  )
}

function LangToggle({ className }) {
  const { t, lang, setLang } = useLanguage()
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={className}
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      aria-label="Switch language"
    >
      <span className="text-xs font-semibold">{t("lang.toggle")}</span>
    </Button>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <img
            src="/images/logo.png"
            alt="Programmer logo"
            className="size-8 rounded-md object-cover"
          />
          {t("brand")}
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a href={link.href}>{t(link.key)}</a>
            </Button>
          ))}
          <Button asChild className="ms-2">
            <a href="#contact">
              {t("nav.cta")} <TbArrowUpRight />
            </a>
          </Button>
          <div className="ms-2 flex items-center gap-2">
            <ThemeToggle />
            <LangToggle />
          </div>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LangToggle />
          </div>
          <Pressable
            type="button"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <TbX className="size-5" /> : <TbMenu2 className="size-5" />}
          </Pressable>
        </div>
      </div>
      <Collapse open={open}>
        <nav className="border-t bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className="justify-start"
                onClick={() => setOpen(false)}
              >
                <a href={link.href}>{t(link.key)}</a>
              </Button>
            ))}
            <Button asChild className="mt-2" onClick={() => setOpen(false)}>
              <a href="#contact">
                {t("nav.cta")} <TbArrowUpRight />
              </a>
            </Button>
          </div>
        </nav>
      </Collapse>
    </header>
  )
}
