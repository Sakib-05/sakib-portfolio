import Contact from "../components/contact";
import Experience from "../components/experience";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Image from "next/image";

export default function Home() {
  return (
    // put margin on both sides of main 
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 md:px-100">
      <Image
        src="/images/profile.jpeg"
        alt="Portrait of Sakib Hoque"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold">Sakib Imamul Hoqe</h1>
      {/* line break */}
      <br />  
      <p>Welcome to my portfolio.</p>
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
