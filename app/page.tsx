import { Particles } from "@/components/home/particle-background";
import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";

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
        <section className="min-h-[90vh] flex flex-col justify-center">
          <Hero />
        </section>

        {/* Expertise Section */}
        <Expertise />
      </div>
    </main>
  );
}
