import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Hawi-Lemma",
    icon: Github,
    color: "bg-foreground/10 hover:bg-foreground hover:text-background",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hawilemma",
    icon: Linkedin,
    color: "bg-primary/10 hover:bg-primary hover:text-primary-foreground",
  },
  {
    name: "Email",
    href: "mailto:lemma.cor@gmail.com",
    icon: Mail,
    color: "bg-accent/10 hover:bg-accent hover:text-accent-foreground",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-widest text-primary uppercase mb-4">
          Connect
        </p>
        <h2 className="font-serif text-[32px] text-foreground text-balance mb-8">
          Get In Touch
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          {"I'm always interested in discussing projects, collaboration opportunities, and software engineering."}
        </p>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
