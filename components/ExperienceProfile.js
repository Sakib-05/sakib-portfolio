import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { linkedInExperienceUrl } from "@/lib/experiences";

export default function ExperienceProfile({ experience }) {
  return (
    <main className="min-h-screen bg-blue-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#experience"
          className="mb-8 inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to internship experience
        </Link>

        <Card className="overflow-hidden bg-white/90">
          <div className="relative h-56 sm:h-72">
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-lg font-medium text-blue-200">
                {experience.company}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                {experience.role}
              </h1>
            </div>
          </div>

          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl text-muted-foreground">
                  {experience.summary}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-lg text-muted-foreground">
                <CalendarDays aria-hidden="true" className="size-4" />
                {experience.duration}
              </div>
            </div>

            <Separator className="my-7" />
            <div className="space-y-8">
              {(experience.githubUrl ||
                experience.projectUrl ||
                linkedInExperienceUrl) && (
                <section>
                  <CardHeader className="p-0">
                    <CardTitle>Experience links</CardTitle>
                    <CardDescription>
                      Explore the related work and experience details
                    </CardDescription>
                  </CardHeader>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {experience.githubUrl && (
                      <a
                        href={experience.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        GitHub repository
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                    {experience.projectUrl && (
                      <a
                        href={experience.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        Live project
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                    {linkedInExperienceUrl && (
                      <a
                        href={linkedInExperienceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition-colors hover:text-blue-900"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        LinkedIn experience
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                  </div>
                </section>
              )}

              <section>
                <CardHeader className="p-0">
                  <CardTitle>Key contributions</CardTitle>
                  <CardDescription>
                    The work and outcomes from this internship
                  </CardDescription>
                </CardHeader>
                <ul className="mt-5 space-y-4">
                  {experience.tasks.map((task) => (
                    <li key={task} className="flex gap-3 text-lg leading-8">
                      <ArrowDown
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 rotate-[-45deg] text-blue-600"
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <CardHeader className="p-0">
                  <CardTitle>Technologies</CardTitle>
                  <CardDescription>
                    Tools and technologies used in this role
                  </CardDescription>
                </CardHeader>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-base font-medium text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
