export function About() {
  const focusAreas = [
    "Full-stack web applications",
    "Containerized development workflows",
    "Cloud deployment",
    "Integrating AI-assisted features into applications",
  ]

  const practices = [
    "Git-based collaboration",
    "Containerized development environments",
    "Modular backend architecture",
    "Incremental project planning",
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm tracking-widest text-primary uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-[32px] text-foreground mb-8 text-balance">
              About Me
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am a software engineering student interested in building practical systems 
              that combine backend engineering, cloud infrastructure, and modern web interfaces.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-base text-foreground font-medium mb-4">
                My recent projects focus on:
              </p>
              <ul className="space-y-2">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              I enjoy designing systems from concept to deployment, including database design, 
              backend APIs, and user-facing interfaces.
            </p>

            <div>
              <p className="text-base text-foreground font-medium mb-4">
                Currently I am developing projects that showcase real-world engineering practices such as:
              </p>
              <ul className="space-y-2">
                {practices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
