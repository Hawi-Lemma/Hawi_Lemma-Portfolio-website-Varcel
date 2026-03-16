import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Book Exchange Platform",
    description: "A full-stack web application allowing users to buy, sell, and exchange second-hand books locally. Features include user accounts, searchable listings, book exchanges, and messaging between users.",
    tags: ["Vue", "FastAPI", "PostgreSQL", "Docker", "Azure"],
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "AI Resume Analyzer",
    description: "A lightweight application that analyzes resumes and extracts key skills using AI. The system processes uploaded documents and generates structured summaries.",
    tags: ["FastAPI", "Python", "AI API", "Docker"],
    image: "/images/project-2.jpg",
    link: "#",
  },
  {
    title: "Cloud Container Demo",
    description: "A demonstration project exploring containerized application deployment. The project showcases service separation, environment configuration, and database integration.",
    tags: ["Docker", "PostgreSQL", "FastAPI"],
    image: "/images/project-3.jpg",
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
