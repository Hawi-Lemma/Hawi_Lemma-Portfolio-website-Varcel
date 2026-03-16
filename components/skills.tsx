const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design Systems"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-primary uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-[32px] text-foreground text-balance">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
