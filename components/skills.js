import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillSections = [
  {
    title: "Languages",
    description: "Core programming and query languages",
    skills: [
      { name: "TypeScript", years: 1, icon: "typescript" },
      { name: "Python", years: 2, icon: "python" },
      {
        name: "SQL",
        years: 2,
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Runtime",
    description: "Libraries and platforms I build with",
    skills: [
      { name: "React", years: 2, icon: "react" },
      { name: "Next.js", years: 2, icon: "nextdotjs" },
      { name: "Node.js", years: 1, icon: "nodedotjs" },
      { name: "Flask", years: 1, icon: "flask" },
    ],
  },
  {
    title: "Databases",
    description: "Data storage and management systems",
    skills: [
      { name: "MySQL", years: 1, icon: "mysql" },
      { name: "MongoDB", years: 2, icon: "mongodb" },
    ],
  },
  {
    title: "Tools",
    description: "Tools that support my development workflow",
    skills: [
      { name: "Git", years: 2, icon: "git" },
      { name: "GitHub", years: 2, icon: "github" },
      { name: "GitHub Copilot", years: 2, icon: "githubcopilot" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-muted-foreground">
          Technologies and tools I use to design, build, and ship software.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {skillSections.map((section) => (
          <Card key={section.title} className="h-full bg-white/80">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex min-w-0 items-center gap-2 rounded-lg border border-border/70 bg-background/70 p-2 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-within:border-blue-300 focus-within:bg-blue-50"
                    tabIndex={0}
                  >
                    <img
                      src={
                        skill.iconUrl ??
                        `https://cdn.simpleicons.org/${skill.icon}`
                      }
                      alt={`${skill.name} icon`}
                      width="24"
                      height="24"
                      className="size-6 shrink-0"
                    />
                    <span className="min-w-0 break-words text-base font-medium">
                      {skill.name}
                    </span>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-base text-background opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      experience (years): {skill.years}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
