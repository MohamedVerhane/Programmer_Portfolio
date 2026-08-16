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
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <InView className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {t("about.label")}
      </InView>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <InView>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("about.heading")}
          </h2>
        </InView>
        <InView delay={0.1} className="flex flex-col gap-4 text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <Button variant="link" asChild className="w-fit px-0 text-foreground">
            <a href="#contact">
              {t("about.process")} <TbArrowRight />
            </a>
          </Button>
        </InView>
      </div>
      <Stagger className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.key}>
            <Card>
              <CardContent className="flex flex-col gap-1.5 p-6">
                <span className="text-3xl font-bold tracking-tight">
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
