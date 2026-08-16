import { useState } from "react"
import { TbArrowUpRight, TbMenu2, TbMoon, TbSun, TbX } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Collapse } from "@/components/ui/motion-collapse"
import { Pressable } from "@/components/ui/motion-pressable"
import { useTheme } from "@/components/theme-provider"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
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

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

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
          Programmer
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button asChild className="ml-2">
            <a href="#contact">
              Let's talk <TbArrowUpRight />
            </a>
          </Button>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
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
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
            <Button asChild className="mt-2" onClick={() => setOpen(false)}>
              <a href="#contact">
                Let's talk <TbArrowUpRight />
              </a>
            </Button>
          </div>
        </nav>
      </Collapse>
    </header>
  )
}
