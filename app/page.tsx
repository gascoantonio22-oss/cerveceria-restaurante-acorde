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
      <section className="relative h-[118svh] md:h-[122svh] lg:h-[124svh]">
        <div className="sticky top-0">
          <HeroSection />
        </div>
      </section>
      <div className="relative z-20 -mt-[18svh] md:-mt-[22svh] lg:-mt-[24svh]">
        <AboutSection />
      </div>
      <PhotoBreakSection
        positionClassName="bg-[center_18%] md:bg-[center_22%]"
        heightClassName="h-[24vh] min-h-[8rem] md:h-[28vh] lg:h-[32vh]"
        topFadeClassName="from-[#fbf8f3] via-[#f5eee5]/76"
        bottomFadeClassName="via-[#f4efe8]/28 to-[#f4efe8]"
      />
      <MenuSection />
      <ContactSection />
      <PhotoBreakSection
        positionClassName="bg-[center_12%] md:bg-[center_18%]"
        heightClassName="h-[14vh] min-h-[4.75rem] md:h-[18vh] lg:h-[20vh]"
        topFadeClassName="from-[#050505] via-[#050505]/74"
        bottomFadeClassName="via-[#020202]/36 to-[#020202]"
      />
      <Footer />
    </main>
  )
}
