import { TbCode, TbDatabase, TbServer } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const skills = [
  {
    icon: TbCode,
    titleKey: "skills.frontend",
    blurbKey: "skills.frontend.blurb",
    items: ["HTML & CSS", "JavaScript / TypeScript", "React & Next.js", "Tailwind CSS"],
  },
  {
    icon: TbServer,
    titleKey: "skills.backend",
    blurbKey: "skills.backend.blurb",
    items: ["Node.js & Express", "Python", "REST APIs", "Authentication"],
  },
  {
    icon: TbDatabase,
    titleKey: "skills.tools",
    blurbKey: "skills.tools.blurb",
    items: ["PostgreSQL / MongoDB", "MySQL", "Git & GitHub", "Docker / Figma / VS Code"],
  },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
          {t("skills.label")}
        </InView>
        <InView className="mb-12 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          <h2>{t("skills.heading")}</h2>
        </InView>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {skills.map(({ icon: Icon, titleKey, blurbKey, items }) => (
            <StaggerItem key={titleKey}>
              <Card className="group transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
                <CardContent className="flex flex-col gap-4 p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{t(titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(blurbKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="secondary" className="border-primary/[0.06]">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
