import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ExperienceProjects } from "@/components/sections/ExperienceProjects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";

const Divider = () => <div className="border-t border-[var(--border)]" />;

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <ExperienceProjects />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
