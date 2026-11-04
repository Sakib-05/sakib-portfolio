import { Mail } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    description: "Send me an email",
    href: "mailto:sakibimamul03@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    description: "View my projects",
    href: "https://github.com/Sakib-05",
    iconUrl: "https://cdn.simpleicons.org/github",
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Connect with me",
    href: "https://www.linkedin.com/in/sbque05/",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Let&apos;s connect</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-muted-foreground">
          I&apos;d love to hear from you. Reach out through any of the links
          below.
        </p>
      </div>

      <Card className="mx-auto max-w-3xl bg-white/80">
        <CardContent className="grid gap-3 p-5 sm:grid-cols-3">
          {contactLinks.map(
            ({ label, description, href, icon: Icon, iconUrl, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={`${label}: ${description}`}
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "h-auto min-h-24 flex-col items-center justify-center gap-2 p-4 text-center transition-all hover:scale-105 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg",
                })}
              >
                {iconUrl ? (
                  <img
                    src={iconUrl}
                    alt=""
                    width="28"
                    height="28"
                    className="size-7"
                  />
                ) : (
                  <Icon
                    className="size-7 text-blue-600"
                    aria-hidden="true"
                  />
                )}
                <span className="text-base font-semibold">{label}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {description}
                </span>
              </a>
            ),
          )}
        </CardContent>
      </Card>
    </section>
  );
}
