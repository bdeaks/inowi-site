import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AgentShowcase from "@/components/AgentShowcase";
import NotOptional from "@/components/NotOptional";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import ClosingStatement from "@/components/ClosingStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AgentShowcase />
        <NotOptional />
        <Capabilities />
        <Process />
        <ClosingStatement />
      </main>
      <Footer />
    </>
  );
}
