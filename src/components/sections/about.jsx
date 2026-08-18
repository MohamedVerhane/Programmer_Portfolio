import { TbArrowLeft, TbArrowRight, TbHeart, TbRocket, TbUsers } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountUp } from "@/components/ui/motion-count-up"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const stats = [
  { target: 3, suffix: "+", key: "about.stat1" },
  { target: 20, suffix: "+", key: "about.stat2" },
  { target: 10, suffix: "+", key: "about.stat3" },
  { target: 100, suffix: "%", key: "about.stat4" },
]

const pillars = [
  { icon: TbRocket, en: "Fast & Scalable", ar: "سريع وقابل للتوسع" },
  { icon: TbUsers, en: "User-Focused", ar: "مركّز على المستخدم" },
  { icon: TbHeart, en: "Pixel-Perfect", ar: "دقيق التفاصيل" },
]

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.54_0.22_265_/_0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.72_0.18_265_/_0.08),transparent)]" />

      <div className="mx-auto max-w-6xl px-6 py-28">
        <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
          {t("about.label")}
        </InView>
        <InView className="mb-14 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem]">
          <h2>{t("about.heading")}</h2>
        </InView>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <InView>
            <Card>
              <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">{t("about.p1")}</p>
                  <p className="text-base leading-relaxed">{t("about.p2")}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {pillars.map((p, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground dark:border-white/[0.06] dark:bg-white/[0.03]"
                    >
                      <p.icon className="size-3.5 text-primary" />
                      {lang === "ar" ? p.ar : p.en}
                    </span>
                  ))}
                </div>
                <Button variant="link" asChild className="w-fit px-0 text-primary">
                  <a href="#contact">
                    {t("about.process")}{" "}
                    {lang === "ar" ? (
                      <TbArrowLeft aria-hidden="true" />
                    ) : (
                      <TbArrowRight aria-hidden="true" />
                    )}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </InView>

          <InView delay={0.15} className="flex">
            <div className="relative mx-auto flex w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-xl dark:border-white/[0.06] w-full">
                <img
                  src="/images/about-workspace.jpg"
                  alt="Workspace with code on screen"
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/[0.06] blur-sm dark:bg-primary/[0.08]" />
            </div>
          </InView>
        </div>

        <Stagger className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.key}>
              <Card className="group transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.04]">
                <CardContent className="flex flex-col gap-1 p-5">
                  <span className="text-3xl font-extrabold tracking-tight text-primary">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t(stat.key)}
                  </span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
