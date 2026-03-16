const experiences = [
  {
    company: "Vercel",
    role: "Senior Developer",
    period: "2022 - Present",
    description: "Leading frontend architecture for enterprise clients, mentoring junior developers, and driving technical decisions.",
  },
  {
    company: "Stripe",
    role: "Full-Stack Engineer",
    period: "2020 - 2022",
    description: "Built payment infrastructure handling millions of transactions, collaborated with cross-functional teams globally.",
  },
  {
    company: "Airbnb",
    role: "Software Engineer",
    period: "2018 - 2020",
    description: "Developed core booking features used by millions of users, optimized performance and accessibility.",
  },
]

const testimonials = [
  {
    quote: "Alex is one of the most talented developers I've worked with. Their attention to detail and ability to solve complex problems is exceptional.",
    author: "Sarah Johnson",
    role: "Engineering Manager, Vercel",
  },
  {
    quote: "Working with Alex was a game-changer for our team. They brought both technical expertise and creative problem-solving to every project.",
    author: "Michael Chen",
    role: "CTO, TechStartup",
  },
]

export function Collaboration() {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Experience
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            Collaboration & Teams
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="font-serif text-xl text-foreground mb-8">
              Work History
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{exp.role}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="font-serif text-xl text-foreground mb-8">
              What People Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                >
                  <blockquote className="text-foreground leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
