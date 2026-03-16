import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-widest text-primary uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Software Engineering Student
        </p>
        
        <h1 className="font-serif text-5xl md:text-[56px] text-foreground mb-8 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {"Hi, I'm Hawi."}
        </h1>
        
        <div className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 space-y-4">
          <p>
            Software Engineering student focused on building
            full-stack applications and cloud-based systems.
          </p>
          <p>
            I work with modern web technologies,
            containerized infrastructure, and AI-assisted tools.
          </p>
          <p className="text-primary font-medium">
            Currently building projects with Vue, FastAPI, and Docker.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Link
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            href="/resume.pdf"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-12 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </Link>
    </section>
  )
}
