import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Sponsors from "@/components/main/Sponsors";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Sponsors />
      </div>
    </main>
  );
}
