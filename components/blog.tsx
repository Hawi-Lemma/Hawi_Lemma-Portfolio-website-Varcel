import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "Building a Full-Stack Book Platform with Vue and FastAPI",
    excerpt: "A walkthrough of designing and implementing a book exchange application using modern web technologies.",
    date: "Coming Soon",
    readTime: "",
    link: "#",
  },
  {
    title: "Deploying Containerized Applications with Docker",
    excerpt: "Exploring containerization strategies for development and production environments.",
    date: "Coming Soon",
    readTime: "",
    link: "#",
  },
  {
    title: "Using AI APIs in Small Developer Projects",
    excerpt: "Practical approaches to integrating AI-powered features into lightweight applications.",
    date: "Coming Soon",
    readTime: "",
    link: "#",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Insights
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            Writing & Thoughts
          </h2>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.link}
              className="group block bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    {post.readTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
