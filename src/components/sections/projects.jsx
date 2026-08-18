import { TbArrowUpRight } from "react-icons/tb"
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const tagIcons = {
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "PostgreSQL": SiPostgresql,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "Python": SiPython,
  "REST API": TbArrowUpRight,
  "JavaScript": SiJavascript,
}

const projects = [
  {
    number: "01",
    typeKey: "projects.p1.type",
    titleKey: "projects.p1.title",
    descKey: "projects.p1.desc",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/aurora-finance.jpg",
    alt: "Laptop with financial documents and calculator on a desk",
  },
  {
    number: "02",
    typeKey: "projects.p2.type",
    titleKey: "projects.p2.title",
    descKey: "projects.p2.desc",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/lyra-workspace.jpg",
    alt: "Creative team collaborating around a table with laptops",
  },
  {
    number: "03",
    typeKey: "projects.p3.type",
    titleKey: "projects.p3.title",
    descKey: "projects.p3.desc",
    tags: ["Next.js", "Python", "REST API"],
    image: "/images/metric-studio.jpg",
    alt: "Analytics dashboard with charts displayed on a screen",
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
            {t("projects.label")}
          </InView>
          <InView className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <h2>{t("projects.heading")}</h2>
          </InView>
        </div>
        <InView delay={0.1}>
          <Button variant="outline" asChild className="border-primary/20">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {t("projects.github")} <TbArrowUpRight />
            </a>
          </Button>
        </InView>
      </div>
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.number}>
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.04]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute start-4 top-4 rounded-lg bg-primary/90 px-2.5 py-1 text-xs font-bold tracking-widest text-primary-foreground backdrop-blur">
                  {project.number}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-primary/60">
                  {t(project.typeKey)}
                </span>
                <h3 className="text-xl font-semibold">{t(project.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(project.descKey)}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  {project.tags.map((tag) => {
                    const Icon = tagIcons[tag]
                    return (
                      <Badge key={tag} variant="secondary" className="gap-1.5 border-primary/[0.06]">
                        {Icon && <Icon className="size-3.5" />}
                        {tag}
                      </Badge>
                    )
                  })}
                </div>
                <Button
                  variant="ghost"
                  asChild
                  className="mt-2 w-fit rounded-full px-3 text-primary hover:bg-primary/5"
                >
                  <a
                    href="#contact"
                    aria-label={`${t(project.titleKey)} live demo`}
                  >
                    {t("projects.liveDemo")} <TbArrowUpRight />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
