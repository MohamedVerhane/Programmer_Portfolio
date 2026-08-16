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
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {t("services.label")}
      </InView>
      <InView className="mb-12 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
        <h2>{t("services.heading")}</h2>
      </InView>
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, titleKey, descKey }) => (
          <StaggerItem key={titleKey}>
            <Card>
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(descKey)}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
