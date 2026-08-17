import { motion } from "motion/react"
import { TbArrowDown, TbArrowUpRight, TbSparkles } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const code = `const developer = {
  name: "Programmer",
  role: "Full-Stack Developer",
  focus: ["quality", "impact"],
  available: true,
}`

export default function Hero() {
  const { lang, t } = useLanguage()
  const textGradient =
    lang === "ar"
      ? "bg-gradient-to-l from-background via-background/50 to-transparent"
      : "bg-gradient-to-r from-background via-background/50 to-transparent"

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          loading="eager"
          className="size-full object-cover opacity-40"
        />
        <div className={`absolute inset-0 ${textGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <Stagger
          className="flex flex-col items-start gap-7"
          initial="initial"
          animate="animate"
          viewport={undefined}
        >
          <StaggerItem>
            <Badge
              variant="secondary"
              className="gap-2 border border-primary/10 bg-primary/5 px-4 py-1.5 text-primary"
            >
              <TbSparkles className="size-3.5" />
              {t("hero.badge")}
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]">
              {t("hero.greeting")}
              <br />
              <span className="bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
                {t("hero.role")}
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t("hero.intro")}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="shadow-md shadow-primary/20">
                <a href="#projects">
                  {t("hero.viewWork")} <TbArrowDown />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/20">
                <a href="#contact">
                  {t("hero.contactMe")} <TbArrowUpRight />
                </a>
              </Button>
            </div>
          </StaggerItem>
        </Stagger>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="hidden w-full max-w-md justify-self-end lg:block dark:backdrop-blur-sm">
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ms-2 text-xs text-muted-foreground">
                  portfolio.tsx
                </span>
              </div>
              <pre className="overflow-x-auto rounded-xl bg-primary/[0.04] p-4 font-mono text-sm leading-relaxed dark:bg-primary/[0.06]">
                <code>{code}</code>
              </pre>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
