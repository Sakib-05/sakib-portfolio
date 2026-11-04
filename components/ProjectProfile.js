import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProjectProfile({ project }) {
  return (
    <main className="min-h-screen bg-blue-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to projects
        </Link>

        <Card className="overflow-hidden bg-white/90">
          <div className="relative h-56 sm:h-72">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-lg font-medium text-blue-200">Project profile</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                {project.name}
              </h1>
            </div>
          </div>

          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <CardHeader className="p-0">
                  <CardTitle>About this project</CardTitle>
                  <CardDescription className="mt-2 text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-lg text-muted-foreground">
                <CalendarDays aria-hidden="true" className="size-4" />
                {project.startDate} - {project.endDate}
              </div>
            </div>

            <Separator className="my-7" />

            <div className="space-y-8">
              <section>
                <CardHeader className="p-0">
                  <CardTitle>Technology stack</CardTitle>
                  <CardDescription>
                    Tools and frameworks used to build this project
                  </CardDescription>
                </CardHeader>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-base font-medium text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              {(project.githubUrl || project.liveUrl) && (
                <section>
                  <CardHeader className="p-0">
                    <CardTitle>Project links</CardTitle>
                    <CardDescription>
                      Explore the source code or live deployment
                    </CardDescription>
                  </CardHeader>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        GitHub repository
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        Live project
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
