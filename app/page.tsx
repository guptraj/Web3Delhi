import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Sponsors from "@/components/main/Sponsors";
import { GlobeDemo } from "@/components/main/Globedemo";
import {BentoGridDemo} from "@/components/main/BentoGridDemo";
import Prizes from "@/components/main/Prizes";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <BentoGridDemo/>
        <Prizes/>
        <Sponsors />
        <GlobeDemo />
        
      </div>
    </main>
  );
}
