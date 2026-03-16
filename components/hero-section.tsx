import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { SectionLink } from "@/components/section-link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_24%] bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/acorde-fachada-hola.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/76 via-black/52 to-black/78" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[1] h-16 md:hidden bg-gradient-to-b from-transparent via-[#f7f2ec]/18 to-[#fbf8f3]" />
      <div className="absolute inset-x-0 bottom-4 z-[2] flex justify-center md:hidden">
        <div className="h-px w-20 bg-white/14" />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-[center_18%] bg-no-repeat opacity-28 blur-sm"
          style={{
            backgroundImage: "url('/acorde-fachada-hola.png')",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[46vw] min-w-[420px] bg-cover bg-[center_12%] bg-no-repeat opacity-[0.97]"
          style={{
            backgroundImage: "url('/acorde-fachada-hola.png')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 34%, rgba(0,0,0,0.66) 58%, rgba(0,0,0,0.58) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 76% 38%, rgba(228,163,76,0.18) 0%, rgba(228,163,76,0.08) 14%, transparent 28%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-black/68" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <img
            src="/acorde-logo-principal-transparent.png"
            alt="Acorde Cervecería"
            loading="eager"
            fetchPriority="high"
            className="h-40 sm:h-48 md:hidden max-w-[90vw] sm:max-w-[84vw] w-auto mx-auto"
          />
          <img
            src="/acorde-logo-principal-transparent.png"
            alt="Acorde Cervecería"
            loading="eager"
            fetchPriority="high"
            className="hidden md:block md:h-72 lg:h-80 w-auto mx-auto"
          />
        </div>

        {/* Mahou Badge - subtle integration */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-background/30 rounded-sm mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-background/70 tracking-wider">MAHOU</span>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-background/90 max-w-3xl mx-auto leading-relaxed font-serif italic">
          El arte del tapeo tradicional en el corazón de Goya.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full border border-white/15 bg-white px-8 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.26)] transition-all hover:-translate-y-0.5 hover:bg-white/92"
          >
            <SectionLink href="#carta">Explorar la carta</SectionLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border border-white/30 bg-white/[0.04] px-8 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/[0.08]"
          >
            <SectionLink href="#contacto">Dónde estamos</SectionLink>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <SectionLink href="#nosotros" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-background/70" />
        </SectionLink>
      </div>
    </section>
  )
}
