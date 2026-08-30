const experiences = [
  "Working with Git-based team workflows",
  "Participating in code reviews",
  "Coordinating feature planning",
  "Maintaining consistent development environments",
]

export function Collaboration() {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Teamwork
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            Collaboration
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            A couple of my projects are developed in collaborative environments.
          </p>
          
          <p className="text-base text-foreground font-medium mb-4">
            Experience includes:
          </p>
          
          <ul className="space-y-3 mb-8">
            {experiences.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-base text-muted-foreground leading-relaxed">
            I enjoy the process of translating ideas into structured development tasks 
            and organizing work incrementally with teammates.
          </p>
        </div>
      </div>
    </section>
  )
}
