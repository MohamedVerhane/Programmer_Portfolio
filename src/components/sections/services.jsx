import {
  TbBox,
  TbDeviceLaptop,
  TbGauge,
  TbPlugConnected,
} from "react-icons/tb"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"

const services = [
  {
    icon: TbDeviceLaptop,
    title: "Web Development",
    desc: "Distinctive marketing sites and web experiences that deliver a strong first impression.",
  },
  {
    icon: TbBox,
    title: "Full-Stack Products",
    desc: "Thoughtful, scalable applications — from core architecture to the final interface.",
  },
  {
    icon: TbPlugConnected,
    title: "APIs & Integrations",
    desc: "Well-designed services that connect your product, data, and third-party tools.",
  },
  {
    icon: TbGauge,
    title: "Performance & UX",
    desc: "Practical audits and refinements that make existing products faster and easier to use.",
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        05 · Services
      </InView>
      <InView className="mb-12 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
        <h2>
          How I can help your{" "}
          <span className="text-muted-foreground">next idea ship.</span>
        </h2>
      </InView>
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, desc }) => (
          <StaggerItem key={title}>
            <Card>
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
