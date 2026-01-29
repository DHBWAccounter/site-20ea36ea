import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { FeatureCards } from "@/components/feature-cards";
import { LogoSection } from "@/components/logo-section";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Banner */}
      <Hero />
      
      {/* Main Content */}
      <main className="bg-white">
        {/* Mission Section */}
        <Mission />
        
        {/* Feature Cards */}
        <FeatureCards />
        
        {/* Logo Section */}
        <LogoSection />
      </main>
      
      {/* Pre-Footer */}
      <PreFooter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
