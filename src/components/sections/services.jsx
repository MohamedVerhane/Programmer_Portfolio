import {
  TbBox,
  TbDeviceLaptop,
  TbGauge,
  TbPlugConnected,
} from "react-icons/tb"
import { Card, CardContent } from "@/components/ui/card"
import { InView } from "@/components/ui/motion-in-view"
import { Stagger, StaggerItem } from "@/components/ui/motion-stagger"
import { useLanguage } from "@/components/language-provider"

const services = [
  { icon: TbDeviceLaptop, titleKey: "services.s1.title", descKey: "services.s1.desc" },
  { icon: TbBox, titleKey: "services.s2.title", descKey: "services.s2.desc" },
  { icon: TbPlugConnected, titleKey: "services.s3.title", descKey: "services.s3.desc" },
  { icon: TbGauge, titleKey: "services.s4.title", descKey: "services.s4.desc" },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28">
      <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
        {t("services.label")}
      </InView>
      <InView className="mb-6 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
        <h2>{t("services.heading")}</h2>
      </InView>
      <InView delay={0.05} className="mb-12">
        <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg dark:border-white/[0.06]">
          <img
            src="/images/services-banner.jpg"
            alt="Laptop with code on screen"
            className="aspect-[21/9] w-full object-cover"
            loading="lazy"
          />
        </div>
      </InView>
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, titleKey, descKey }) => (
          <StaggerItem key={titleKey}>
            <Card className="group transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md">
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{t(titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(descKey)}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
