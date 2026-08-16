export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
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
        <p className="text-sm text-muted-foreground">
          Designing and building for the web.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted-foreground">
          © 2026 Programmer. Built with React + shadcn/ui.
        </div>
      </div>
    </footer>
  )
}
