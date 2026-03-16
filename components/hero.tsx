import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-widest text-primary uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Full-Stack Developer
        </p>
        
        <h1 className="font-serif text-5xl md:text-[56px] text-foreground mb-8 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Alex Chen
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Crafting elegant digital experiences through thoughtful design and modern technologies. 
          Passionate about building products that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Link
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all"
          >
            Get In Touch
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
