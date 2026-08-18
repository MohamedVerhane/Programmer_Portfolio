import { motion, useReducedMotion } from "motion/react"
import { TbArrowDown, TbArrowUpRight, TbSparkles } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Float } from "@/components/ui/motion-float"
import { Magnetic } from "@/components/ui/motion-magnetic"
import { useLanguage } from "@/components/language-provider"

const code = `const developer = {
  name: "Programmer",
  role: "Full-Stack Developer",
  focus: ["quality", "impact"],
  available: true,
}`

function HeroWords({ text, className, stagger = 0.06, delay = 0 }) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 1, y: 0 } : { y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: delay + i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { lang, t } = useLanguage()
  const textGradient =
    lang === "ar"
      ? "bg-gradient-to-l from-background via-background/50 to-transparent"
      : "bg-gradient-to-r from-background via-background/50 to-transparent"

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="size-full object-cover"
          poster="/images/hero-bg.jpg"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${textGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-7">
          <Badge
            variant="secondary"
            className="gap-2 border border-primary/10 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <TbSparkles className="size-3.5" />
            {t("hero.badge")}
          </Badge>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]">
            <HeroWords text={t("hero.greeting")} />
            {" "}
            <HeroWords
              text={t("hero.role")}
              delay={0.3}
              className={`${lang === "ar" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-primary/70 to-primary bg-clip-text text-transparent`}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {t("hero.intro")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap gap-3"
          >
            <Magnetic strength={0.25}>
              <Button size="lg" asChild className="shadow-md shadow-primary/20">
                <a href="#projects">
                  {t("hero.viewWork")} <TbArrowDown />
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button size="lg" variant="outline" asChild className="border-primary/20">
                <a href="#contact">
                  {t("hero.contactMe")} <TbArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Float y={6} duration={4} className="hidden w-full max-w-md justify-self-end lg:block">
            <Card className="dark:backdrop-blur-sm">
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
          </Float>
        </motion.div>
      </div>
    </section>
  )
}
