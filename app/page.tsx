import { Particles } from "@/components/home/particle-background";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative">
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
        <div className="container mx-auto px-4 py-32 relative z-10">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col justify-center items-start">
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">AI Engineer</span>
              <br />
              <span className="text-foreground">Tech Innovator</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Specializing in Generative AI, Computer Vision, Natural Language Processing,
              and Competitive Programming
            </p>
            <div className="flex gap-4">
              <button className="hover-glow bg-primary/10 border border-primary/50 hover:border-primary text-primary px-8 py-3 rounded-lg font-medium">
                View Projects
              </button>
              <button className="hover-glow bg-background border border-primary/20 hover:border-primary/50 text-primary/90 hover:text-primary px-8 py-3 rounded-lg font-medium">
                Contact Me
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
