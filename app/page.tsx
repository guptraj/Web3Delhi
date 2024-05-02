import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Sponsors from "@/components/main/Sponsors";
import { GlobeDemo } from "@/components/main/globedemo";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Sponsors />
        <GlobeDemo />
        
      </div>
    </main>
  );
}
