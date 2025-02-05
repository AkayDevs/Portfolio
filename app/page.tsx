import { Particles } from "@/components/home/particle-background";

export default function Home() {
  return (
    <div>
       <Particles
        className="fixed inset-0"
        quantity={75}
        staticity={50}
        ease={50}
        size={2}
        color="#00FFFF"
      />
    </div>
  );
}
