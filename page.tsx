import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HudLab from "@/components/HudLab";
import TemporalSlider from "@/components/TemporalSlider";
import FeatureGrid from "@/components/FeatureCards";
import TerminalWaitlist from "@/components/TerminalWaitlist";

export default function Page() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50 pointer-events-none z-50" />
      <Navbar />
      <Hero />
      <HudLab />
      <TemporalSlider />
      <FeatureGrid />
      <TerminalWaitlist />
      <footer className="pb-20 text-center font-mono text-[8px] tracking-[0.4em] opacity-20">
        DEVBANK_AI // ALL_SYSTEMS_OPERATIONAL // 2026
      </footer>
    </main>
  );
}
