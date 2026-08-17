import { useLanguage } from "@/components/language-provider"

export default function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/60 dark:border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-start">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <img
            src="/images/logo.png"
            alt="Programmer logo"
            className="size-8 rounded-lg object-cover"
          />
          {t("brand")}
        </a>
        <p className="text-sm text-muted-foreground">
          {t("footer.tagline")}
        </p>
        <nav className="flex gap-5 text-sm text-muted-foreground">
          <a href="#about" className="transition-colors hover:text-primary">
            {t("footer.about")}
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            {t("footer.work")}
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            {t("footer.contact")}
          </a>
        </nav>
      </div>
      <div className="border-t border-border/60 dark:border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  )
}
