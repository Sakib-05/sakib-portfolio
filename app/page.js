import Contact from "../components/contact";
import Experience from "../components/experience";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    // put margin on both sides of main
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <Image
        src="/images/profile.jpeg"
        alt="Portrait of Sakib Hoque"
        width={200}
        height={200}
        className="rounded-full mb-4 mt-10"
      />
      <h1 className="text-3xl font-bold">Sakib Imamul Hoqe</h1>
      <p className="text-xl">Welcome to my portfolio.</p>
      <a
        href="https://drive.google.com/file/d/1FpRzNuidUtgNwqJuVdwmnKuE3WuBJonu/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants({
          size: "lg",
          className:
            "mt-4 min-h-11 px-8 text-xl !bg-teal-600 text-white shadow-lg shadow-teal-600/25 hover:scale-105 hover:!bg-teal-700",
        })}
      >
        View my CV
        <ExternalLink aria-hidden="true" />
      </a>
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
