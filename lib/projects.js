const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A portfolio website for my professional career history and technical projects.",
    techStack: ["Next.js", "shadcn/ui"],
    image: "/images/portfolio_image.png",
    imageAlt: "Personal portfolio website homepage",
    startDate: "Sep 2026",
    endDate: "Present",
    githubUrl: "https://github.com/Sakib-05/sakib-portfolio.git",
    liveUrl: "https://sakib-portfolio-pi.vercel.app/",
  },
];

export function slugifyProjectName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectBySlug(projectSlug) {
  return projects.find(
    (project) => slugifyProjectName(project.name) === projectSlug,
  );
}

export default projects;
