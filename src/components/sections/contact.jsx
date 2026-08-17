import { useState } from "react"
import {
  TbArrowUpRight,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandX,
  TbMail,
  TbSend,
} from "react-icons/tb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InView } from "@/components/ui/motion-in-view"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"

const socials = [
  { labelKey: "contact.social1", href: "https://github.com/", icon: TbBrandGithub },
  { labelKey: "contact.social2", href: "https://linkedin.com/", icon: TbBrandLinkedin },
  { labelKey: "contact.social3", href: "https://x.com/", icon: TbBrandX },
]

export default function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setStatus(t("contact.status"))
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 max-w-2xl">
        <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
          {t("contact.label")}
        </InView>
        <InView className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          <h2>{t("contact.heading")}</h2>
        </InView>
        <InView delay={0.1} className="text-muted-foreground">
          <p>{t("contact.lede")}</p>
        </InView>
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <InView className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.sendTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contact.namePh")}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.emailPh")}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.messagePh")}
                    className="min-h-36"
                    required
                  />
                </div>
                <Button type="submit" className="w-fit shadow-md shadow-primary/20">
                  {t("contact.submit")} <TbSend />
                </Button>
                {status && (
                  <p className="text-sm text-primary" role="status">
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </InView>
        <InView delay={0.15} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.reachTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="outline" asChild className="justify-start border-primary/20">
                <a href="mailto:hello@yourname.dev">
                  <TbMail /> hello@yourname.dev
                  <TbArrowUpRight className="ms-auto" />
                </a>
              </Button>
              {socials.map(({ labelKey, href, icon: Icon }) => (
                <Button
                  key={labelKey}
                  variant="ghost"
                  asChild
                  className="justify-start hover:bg-primary/5 hover:text-primary"
                >
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon /> {t(labelKey)}
                    <TbArrowUpRight className="ms-auto" />
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>
        </InView>
      </div>
    </section>
  )
}
