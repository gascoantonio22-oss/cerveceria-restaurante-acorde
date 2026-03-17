import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PhotoBreakSection } from "@/components/photo-break-section"
import { MenuSection } from "@/components/menu-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative h-[128svh] md:h-[130svh] lg:h-[132svh]">
        <div className="sticky top-0 z-0">
          <HeroSection />
        </div>
      </section>
      <div className="relative z-20 -mt-[28svh] md:-mt-[30svh] lg:-mt-[32svh]">
        <AboutSection />
      </div>
      <PhotoBreakSection
        positionClassName="bg-[72%_30%] sm:bg-[74%_30%] md:bg-[76%_34%] lg:bg-[78%_34%]"
        heightClassName="h-[24vh] min-h-[8rem] md:h-[28vh] lg:h-[32vh]"
        topFadeClassName="from-[#fbf8f3] via-[#f5eee5]/76"
        bottomFadeClassName="via-[#f4efe8]/28 to-[#f4efe8]"
        motionMultiplier={1.65}
      />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
