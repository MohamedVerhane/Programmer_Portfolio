import { TbCode, TbDatabase, TbServer } from "react-icons/tb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"

const skills = [
  {
    icon: TbCode,
    title: "Frontend",
    blurb: "Interfaces that are fast, inclusive, and a pleasure to use.",
    items: ["HTML & CSS", "JavaScript / TypeScript", "React & Next.js", "Tailwind CSS"],
  },
  {
    icon: TbServer,
    title: "Backend",
    blurb: "Dependable systems built for clarity, security, and scale.",
    items: ["Node.js & Express", "Python", "REST APIs", "Authentication"],
  },
  {
    icon: TbDatabase,
    title: "Data & tools",
    blurb: "Pragmatic tooling and data layers that keep teams moving.",
    items: ["PostgreSQL / MongoDB", "MySQL", "Git & GitHub", "Docker / Figma / VS Code"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-y bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          02 · Toolkit
        </InView>
        <InView className="mb-12 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          <h2>
            The right tools for the right{" "}
            <span className="text-muted-foreground">problem.</span>
          </h2>
        </InView>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {skills.map(({ icon: Icon, title, blurb, items }) => (
            <StaggerItem key={title}>
              <Card>
                <CardContent className="flex flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="secondary">
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
