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

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: TbBrandGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: TbBrandLinkedin },
  { label: "X / Twitter", href: "https://x.com/", icon: TbBrandX },
]

export default function Contact() {
  const [status, setStatus] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setStatus("Thanks! I'll get back to you soon.")
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <InView className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </InView>
        <InView className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          <h2>
            Let's make something{" "}
            <span className="text-muted-foreground">meaningful together.</span>
          </h2>
        </InView>
        <InView delay={0.1} className="text-muted-foreground">
          <p>
            Have an opportunity, a question, or simply want to say hello? My
            inbox is always open.
          </p>
        </InView>
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <InView className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your project..."
                    className="min-h-36"
                    required
                  />
                </div>
                <Button type="submit" className="w-fit">
                  Send Message <TbSend />
                </Button>
                {status && (
                  <p className="text-sm text-muted-foreground" role="status">
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
              <CardTitle>Or reach out directly</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="outline" asChild className="justify-start">
                <a href="mailto:hello@yourname.dev">
                  <TbMail /> hello@yourname.dev
                  <TbArrowUpRight className="ml-auto" />
                </a>
              </Button>
              {socials.map(({ label, href, icon: Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  asChild
                  className="justify-start"
                >
                <a href={href} target="_blank" rel="noreferrer">
                  <Icon /> {label}
                  <TbArrowUpRight className="ml-auto" />
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
