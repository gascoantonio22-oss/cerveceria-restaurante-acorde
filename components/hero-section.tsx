import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { SectionLink } from "@/components/section-link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_24%] bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/acorde-fachada.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/76 to-black/90" />
      </div>

      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La_barra_que_sea_de_marmol_blancpo_no_madera_y_que_delpmaspu.png-tpGThbtnIPDAsAkusMwlWDfrMiLk5O.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <img
            src="/acorde-logo-principal.png"
            alt="Acorde Cervecería"
            className="h-36 sm:h-44 md:hidden max-w-[88vw] sm:max-w-[80vw] w-auto mx-auto"
          />
          <img
            src="/acorde-logo-principal-transparent.png"
            alt="Acorde Cervecería"
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
            className="bg-background text-foreground hover:bg-background/90 text-base px-8 rounded-sm"
          >
            <SectionLink href="#carta">Explorar la carta</SectionLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-background/60 text-background hover:bg-background/10 text-base px-8 rounded-sm bg-transparent"
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
