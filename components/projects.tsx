import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Books Platform",
    description: "This project represents my transition from learning frontend development to understanding how a full-stack application is built and deployed. During a three-month internship, I was responsible for building the Vue.js frontend while working in a collaborative development environment. Alongside the frontend, I gained hands-on exposure to backend development with FastAPI and learned how APIs connect frontend and backend applications. The project also introduced me to Docker, Azure containerized deployment, Google OAuth authentication, CORS, Git, GitHub, and collaborative development workflows.",
    tags: ["Vue.js", "FastAPI", "Docker", "Azure", "PostgreSQL", "Google OAuth"],
    learned: ["Component-based frontend development with Vue.js.", "REST API integration using FastAPI.", "Google OAuth authentication and CORS.", "Git and GitHub collaboration workflows.", "Docker fundamentals and Azure container deployment concepts."],
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    title: "Yamral Africa Itineraries",
    description: "This website was one of my first large frontend projects while learning web development in 2020–2021. It was designed as an extension website for a travel agency to showcase hotel partnerships, travel itineraries, and destination information. Building this project taught me how to organize a multi-page website, structure content for real users, and create responsive layouts using only HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    learned: ["Multi-page website structure and navigation.", "Responsive layouts with HTML and CSS.", "Interactive elements using JavaScript.", "Translating business requirements into a user-facing website."],
    image: "/images/project-2.jpg",
    link: "#",
  },
  {
    title: "William Personal Portfolio Website",
    description: "A custom portfolio website built for a client to present professional experience and projects in a clean, modern, single-page layout. I designed and developed the site from a Figma mock-up, focusing on responsiveness, smooth navigation, and a polished user experience. The project includes interactive portfolio filtering, smooth scrolling navigation, multilingual résumé downloads, and a contact form powered by Web3Forms.",
    tags: ["Figma", "HTML", "CSS", "JavaScript", "Web3Forms"],
    learned: ["Converting a Figma design into a responsive website.", "Client communication and project planning.", "Interactive JavaScript UI features.", "Third-party form integration with Web3Forms."],
    image: "/images/project-3.jpg",
    link: "https://hawi-lemma.github.io/Personal-Website-Client-William_Ngoy/",
  },
  {
    title: "Supermarket Price Comparison System",
    description: "This was my graduation project for my undergraduate software engineering Bachelor of Science degree. The team built a mobile and web application that allows users to compare supermarket prices across different stores and locations through a shared product database. I played a partial role in developing the frontend with Vue.js while my main role was project manager and backend developer building with Django, PostgreSQL database design, authentication, CRUD operations, and Docker-based development workflows.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker", "Azure"],
    learned: ["Full-stack development with Vue.js and Django.", "Relational database design using PostgreSQL.", "Authentication, REST APIs, and CRUD operations.", "Docker-based development environments.", "Railway and GitHub CI/CD workflow.", "Software project planning, UML documentation, and collaborative Git workflows."],
    image: "/images/project-4.jpg",
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">Selected Work</p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.title} href={project.link} className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="mb-5">
                  <p className="text-sm font-medium text-foreground mb-2">What I learned</p>
                  <ul className="flex flex-col gap-1.5">
                    {project.learned.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">{tag}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
