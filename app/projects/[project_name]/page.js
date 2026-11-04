import { notFound } from "next/navigation";

import ProjectProfile from "@/components/ProjectProfile";
import projects, {
  getProjectBySlug,
  slugifyProjectName,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    project_name: slugifyProjectName(project.name),
  }));
}

export async function generateMetadata({ params }) {
  const { project_name: projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Sakib Hoque`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { project_name: projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  return <ProjectProfile project={project} />;
}
