import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects, { slugifyProjectName } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl px-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-muted-foreground">
          A selection of applications and technical projects from my portfolio.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:items-stretch md:justify-center">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="group w-full max-w-md overflow-hidden bg-white/80 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href={`/projects/${slugifyProjectName(project.name)}`}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-lg font-medium text-white">
                  Click to view
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-4 bottom-3 size-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold mt-2">
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
