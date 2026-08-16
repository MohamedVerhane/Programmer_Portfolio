import { TbArrowUpRight } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"

const projects = [
  {
    number: "01",
    type: "WEB APPLICATION · 2025",
    title: "Aurora Finance",
    desc: "A calm, intelligent dashboard that makes personal finance feel less complicated.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/images/aurora-finance.jpg",
    alt: "Laptop with financial documents and calculator on a desk",
  },
  {
    number: "02",
    type: "SAAS PLATFORM · 2024",
    title: "Lyra Workspace",
    desc: "A focused collaboration space for creative teams to plan, share, and ship work.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/lyra-workspace.jpg",
    alt: "Creative team collaborating around a table with laptops",
  },
  {
    number: "03",
    type: "ANALYTICS · 2024",
    title: "Metric Studio",
    desc: "An accessible analytics product that turns noisy data into useful decisions.",
    tags: ["Next.js", "Python", "REST API"],
    image: "/images/metric-studio.jpg",
    alt: "Analytics dashboard with charts displayed on a screen",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            03 · Selected work
          </InView>
          <InView className="text-3xl font-bold tracking-tight sm:text-4xl">
            <h2>
              A few things I've{" "}
              <span className="text-muted-foreground">made recently.</span>
            </h2>
          </InView>
        </div>
        <InView delay={0.1}>
          <Button variant="outline" asChild>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              See all on GitHub <TbArrowUpRight />
            </a>
          </Button>
        </InView>
      </div>
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.number}>
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md bg-background/80 px-2 py-1 text-xs font-bold tracking-widest text-foreground backdrop-blur">
                  {project.number}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  asChild
                  className="mt-2 w-fit rounded-full px-3"
                >
                  <a href="#contact" aria-label={`${project.title} live demo`}>
                    Live Demo <TbArrowUpRight />
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
