export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-widest text-primary uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 text-balance">
              Building the future, one line of code at a time
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              With over 7 years of experience in software development, I specialize in creating 
              scalable web applications that combine beautiful design with robust functionality. 
              My approach is rooted in understanding user needs and translating them into 
              intuitive digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Currently based in San Francisco, I work with startups and enterprises alike, 
              helping them build products that users love. When I&apos;m not coding, you&apos;ll find 
              me exploring nature trails, experimenting with photography, or contributing to 
              open-source projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "7+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <p className="font-serif text-5xl text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
