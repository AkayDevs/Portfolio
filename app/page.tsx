import { Particles } from "@/components/home/particle-background";
import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Technologies from "@/components/home/technologies";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Particle Background */}
      <Particles
        quantity={75}
        connectDistance={150}
        particleSize={{ min: 1, max: 3 }}
        color="#00FFFF"
        secondaryColor="#A020F0"
        velocityRange={{
          x: { min: -0.2, max: 0.2 },
          y: { min: -0.2, max: 0.2 }
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Expertise Section */}
        <Expertise />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Technologies Section */}
        <Technologies />

        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  );
}
