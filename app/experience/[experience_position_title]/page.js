import { notFound } from "next/navigation";

import ExperienceProfile from "@/components/ExperienceProfile";
import experiences, {
  getExperienceByRoleSlug,
  slugifyRole,
} from "@/lib/experiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({
    experience_position_title: slugifyRole(experience.role),
  }));
}

export async function generateMetadata({ params }) {
  const { experience_position_title: roleSlug } = await params;
  const experience = getExperienceByRoleSlug(roleSlug);

  if (!experience) {
    return { title: "Experience Not Found" };
  }

  return {
    title: `${experience.role} | Sakib Hoque`,
    description: experience.summary,
  };
}

export default async function ExperiencePage({ params }) {
  const { experience_position_title: roleSlug } = await params;
  const experience = getExperienceByRoleSlug(roleSlug);

  if (!experience) {
    notFound();
  }

  return <ExperienceProfile experience={experience} />;
}
