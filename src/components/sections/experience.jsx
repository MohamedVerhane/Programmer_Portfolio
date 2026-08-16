import { TbBriefcase } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const jobs = [
  {
    dateKey: "experience.d1",
    roleKey: "experience.r1",
    companyKey: "experience.c1",
    initials: "NL",
    descKey: "experience.desc1",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    dateKey: "experience.d2",
    roleKey: "experience.r2",
    companyKey: "experience.c2",
    initials: "SP",
    descKey: "experience.desc2",
    tags: ["React", "TypeScript", "Docker"],
  },
  {
    dateKey: "experience.d3",
    roleKey: "experience.r3",
    companyKey: "experience.c3",
    initials: "BD",
    descKey: "experience.desc3",
    tags: ["JavaScript", "CSS", "Figma"],
  },
]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-y bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {t("experience.label")}
            </InView>
            <InView className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              <h2>{t("experience.heading")}</h2>
            </InView>
          </div>
          <InView delay={0.1}>
            <Badge
              variant="secondary"
              className="gap-1.5 px-3 py-1 text-xs font-medium"
            >
              <TbBriefcase className="size-3.5" /> {jobs.length}{" "}
              {t("experience.roles")}
            </Badge>
          </InView>
        </div>
        <Stagger className="grid gap-5">
          {jobs.map((job) => (
            <StaggerItem key={job.initials}>
              <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold tracking-wide text-primary">
                        {job.initials}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {t(job.roleKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(job.companyKey)}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-muted-foreground">
                      {t(job.dateKey)}
                    </Badge>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
                    {t(job.descKey)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
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
