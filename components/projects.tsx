import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Books Platform",
    category: "Internship Project",
    description: "This project represents my transition from learning frontend development to understanding how a full-stack application is built and deployed. During a three-month internship, I was responsible for building the Vue.js frontend while working in a collaborative development environment. Alongside the frontend, I gained hands-on exposure to backend development with FastAPI and learned how APIs connect frontend and backend applications. The project also introduced me to Docker, Azure containerized deployment, Google OAuth authentication, CORS, Git, GitHub, and collaborative development workflows.",
    tags: ["Vue.js", "FastAPI", "Docker", "Azure", "PostgreSQL", "Google OAuth"],
    learned: ["Component-based frontend development with Vue.js.", "REST API integration using FastAPI.", "Google OAuth authentication and CORS.", "Git and GitHub collaboration workflows.", "Docker fundamentals and Azure container deployment concepts."],
    image: "/images/project-1.jpg",
    link: null,
  },
  {
    title: "Yamral Africa Itineraries",
    category: "Client Project",
    description: "This website was one of my first large frontend projects while learning web development in 2020–2021. It was designed as an extension website for a travel agency to showcase hotel partnerships, travel itineraries, and destination information. Building this project taught me how to organize a multi-page website, structure content for real users, and create responsive layouts using only HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    learned: ["Multi-page website structure and navigation.", "Responsive layouts with HTML and CSS.", "Interactive elements using JavaScript.", "Translating business requirements into a user-facing website."],
    image: "/images/project-2.jpg",
    link: "https://github.com/Hawi-Lemma/Yamral-Africa-Website-Extension",
    linkType: "GitHub repository",
  },
  {
    title: "William Personal Portfolio Website",
    category: "Client Project",
    description: "A custom portfolio website built for a client to present professional experience and projects in a clean, modern, single-page layout. I designed and developed the site from a Figma mock-up, focusing on responsiveness, smooth navigation, and a polished user experience. The project includes interactive portfolio filtering, smooth scrolling navigation, multilingual résumé downloads, and a contact form powered by Web3Forms.",
    tags: ["Figma", "HTML", "CSS", "JavaScript", "Web3Forms"],
    learned: ["Converting a Figma design into a responsive website.", "Client communication and project planning.", "Interactive JavaScript UI features.", "Third-party form integration with Web3Forms."],
    image: "/images/project-3.jpg",
    link: "https://github.com/Hawi-Lemma/Personal-Website-Client-William_Ngoy",
    linkType: "GitHub repository",
  },
  {
    title: "Supermarket Price Comparison System",
    category: "Graduation Project",
    description: "This was my graduation project for my undergraduate software engineering Bachelor of Science degree. The team built a mobile and web application that allows users to compare supermarket prices across different stores and locations through a shared product database. I played a partial role in developing the frontend with Vue.js while my main role was project manager and backend developer building with Django, PostgreSQL database design, authentication, CRUD operations, and Docker-based development workflows.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker", "Azure"],
    learned: ["Full-stack development with Vue.js and Django.", "Relational database design using PostgreSQL.", "Authentication, REST APIs, and CRUD operations.", "Docker-based development environments.", "Railway and GitHub CI/CD workflow.", "Software project planning, UML documentation, and collaborative Git workflows."],
    image: "/images/project-4.png",
    link: "https://superprice.up.railway.app/signup",
    linkType: "PWA launch",
    linkNotice: "Open on a mobile phone, or launch developer tools in a new tab.",
  },
  {
    title: "Hawi Lemma Personal Portfolio",
    category: "Prompt Engineering Project",
    description: "This personal portfolio website was designed and built entirely through prompt engineering. I translated detailed requirements for typography, color, layout, component structure, accessibility, responsive behavior, and project storytelling into a coherent production-ready interface, then organized and refined each iteration until the final site matched the intended visual direction.",
    tags: ["Prompt Engineering", "Next.js", "React", "Tailwind CSS", "UI Design"],
    learned: ["Structuring complex requirements into clear, actionable prompts.", "Directing typography, color, spacing, and component decisions through written specifications.", "Organizing a multi-section website into reusable components and consistent content patterns.", "Reviewing generated implementations and refining them through precise iterative feedback.", "Combining design judgment, technical planning, and prompt-based development into a polished product."],
    image: "/images/project-5.png",
    link: null,
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
          {projects.map((project) => {
            const card = (
              <article className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs tracking-widest text-primary uppercase mb-2">{project.category}</p>
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                    </div>
                    {project.link && <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />}
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
                {project.linkType && <p className="mt-4 text-xs text-primary">Opens {project.linkType}</p>}
                {project.linkNotice && <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{project.linkNotice}</p>}
              </div>
            </article>
            )
            return project.link ? (
              <Link key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — ${project.linkType}`}>
                {card}
              </Link>
            ) : <div key={project.title}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}
