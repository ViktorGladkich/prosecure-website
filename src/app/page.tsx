import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink text-bone">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Expertise />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
