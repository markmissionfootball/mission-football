import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import QuickLinks from "@/components/QuickLinks";
import TeamStoreCTA from "@/components/TeamStoreCTA";
import DiabloPride from "@/components/DiabloPride";
import BuildingChampions from "@/components/BuildingChampions";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <QuickLinks />
      <TeamStoreCTA />
      <DiabloPride />
      <BuildingChampions />
    </main>
  );
}
