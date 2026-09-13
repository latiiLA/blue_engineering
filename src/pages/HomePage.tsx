import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
