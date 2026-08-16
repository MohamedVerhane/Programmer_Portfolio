import { TbArrowRight } from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "20+", label: "Projects completed" },
  { value: "10+", label: "Technologies used" },
  { value: "100%", label: "Commitment to quality" },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <InView className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        01 · About me
      </InView>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <InView>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            I turn ambitious ideas into products people{" "}
            <span className="text-muted-foreground">enjoy using.</span>
          </h2>
        </InView>
        <InView delay={0.1} className="flex flex-col gap-4 text-muted-foreground">
          <p>
            I'm a product-minded developer who enjoys working at the
            intersection of thoughtful design and reliable engineering. I care
            about the details that make software feel effortless.
          </p>
          <p>
            From first sketch to a scalable launch, I solve complex problems
            with clear thinking, strong collaboration, and a relentless focus
            on the people using the product.
          </p>
          <Button variant="link" asChild className="w-fit px-0 text-foreground">
            <a href="#contact">
              More about my process <TbArrowRight />
            </a>
          </Button>
        </InView>
      </div>
      <Stagger className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <Card>
              <CardContent className="flex flex-col gap-1.5 p-6">
                <span className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
