export const linkedInExperienceUrl =
  "https://www.linkedin.com/in/sbque05/details/experience/";

const experiences = [
  {
    company: "Tax Star",
    role: "Software Engineer Intern",
    duration: "Jan 2026 - Apr 2026",
    image: "/images/taxstar.png",
    imageAlt: "Tax Star invoice management platform dashboard",
    projectUrl: "https://erp-connector-layer.vercel.app/",
    summary: "Built and automated an invoice management platform.",
    tasks: [
      "Built a full-stack e-invoice management platform using Flask, Next.js, MongoDB, and the Xero API, automating invoice synchronisation and PDF report generation.",
      "Implemented OAuth 2.0 authentication and webhook processing to securely connect Xero accounts and synchronise invoice records with external updates.",
      "Integrated Google Gemini OCR for uploaded invoices, achieving approximately 90% extraction accuracy during testing.",
      "Developed automated email notifications using SendGrid and WeasyPrint to deliver transaction confirmations and invoice reports.",
    ],
    technologies: [
      "Flask",
      "Python",
      "MongoDB",
      "Next.js",
      "Xero API",
      "Google Gemini AI",
      "SendGrid API",
      "WeasyPrint",
    ],
  },
  {
    company: "Imperial College London",
    role: "Software & Robotics Intern",
    duration: "Jun 2025 - Aug 2025",
    image: "/images/imperial.png",
    imageAlt: "Misty robot being used for an interactive research project",
    summary: "Developed and tested a conversational Misty robot system.",
    tasks: [
      "Refactored and tested the Python codebase for a Misty robot interaction system supporting 11 gestures and 13 conversational triggers, improving reliability during demonstrations.",
      "Used the mistyPy package for Misty robot functionality, Google Text-to-Speech to detect player speech, and OpenAI for audio generation.",
      "Led participant recruitment, securing 17 sign-ups for the research study through a targeted poster campaign.",
      "Established and managed the project's Git repository, streamlining team collaboration and ensuring code integrity.",
    ],
    technologies: [
      "Python",
      "mistyPy",
      "OpenAI API",
      "Google Text-to-Speech API",
      "Git",
    ],
  },
];

export function slugifyRole(role) {
  return role
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getExperienceByRoleSlug(roleSlug) {
  return experiences.find(
    (experience) => slugifyRole(experience.role) === roleSlug,
  );
}

export default experiences;
