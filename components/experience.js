import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import experiences, { slugifyRole } from "@/lib/experiences";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Internship Experience
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          A closer look at the products, systems, and research projects I have
          worked on.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        {experiences.map((experience) => (
          <Card
            key={experience.role}
            className="group flex-1 overflow-hidden bg-white/80 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href={`/experience/${slugifyRole(experience.role)}`}>
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-sm font-medium text-white">
                  View experience profile
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-4 bottom-3 size-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <CardHeader>
                <CardTitle>{experience.company}</CardTitle>
                <CardDescription>{experience.role}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
