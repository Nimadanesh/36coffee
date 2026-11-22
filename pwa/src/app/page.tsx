import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { OpportunitySection } from "@/components/OpportunitySection";
import { KitSection } from "@/components/KitSection";
import { NetworkSection } from "@/components/NetworkSection";
import { RegisterSection } from "@/components/RegisterSection";
import { OrderSection } from "@/components/OrderSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <Marquee />
        <OpportunitySection />
        <KitSection />
        <NetworkSection />
        <RegisterSection />
        <OrderSection />
      </main>
      <SiteFooter />
    </>
  );
}
