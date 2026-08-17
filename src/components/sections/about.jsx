import { TbArrowRight } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const stats = [
  { value: "3+", key: "about.stat1" },
  { value: "20+", key: "about.stat2" },
  { value: "10+", key: "about.stat3" },
  { value: "100%", key: "about.stat4" },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <InView className="mb-6 text-sm font-medium uppercase tracking-widest text-primary/70">
        {t("about.label")}
      </InView>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <InView>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem]">
            {t("about.heading")}
          </h2>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
          <Button variant="link" asChild className="mt-6 w-fit px-0 text-primary">
            <a href="#contact">
              {t("about.process")} <TbArrowRight />
            </a>
          </Button>
        </InView>
        <InView delay={0.1}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg dark:border-white/[0.06]">
              <img
                src="/images/about-workspace.jpg"
                alt="Workspace with code on screen"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/[0.04] dark:bg-primary/[0.06]" />
          </div>
        </InView>
      </div>
      <Stagger className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.key}>
            <Card className="group transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <CardContent className="flex flex-col gap-1.5 p-6">
                <span className="text-3xl font-extrabold tracking-tight text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t(stat.key)}
                </span>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
