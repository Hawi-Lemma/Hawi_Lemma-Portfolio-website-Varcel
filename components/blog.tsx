import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "The Art of Component Architecture",
    excerpt: "Exploring patterns for building scalable and maintainable React applications with clean separation of concerns.",
    date: "March 2026",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Designing for Performance",
    excerpt: "A deep dive into web vitals, optimization strategies, and creating lightning-fast user experiences.",
    date: "February 2026",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "From container queries to cascade layers — leveraging the latest CSS features for elegant styling solutions.",
    date: "January 2026",
    readTime: "5 min read",
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
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
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
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
