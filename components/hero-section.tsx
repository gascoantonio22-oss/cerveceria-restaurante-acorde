import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Draft beer on marble counter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La_barra_que_sea_de_marmol_blancpo_no_madera_y_que_delpmaspu.png-tpGThbtnIPDAsAkusMwlWDfrMiLk5O.jpeg')",
        }}
      >
        {/* Semi-transparent dark overlay for logo prominence */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Invierte_los_colores_loq_ue_ahora_es_negro_que_sea_delpmaspu-removebg-preview-yAcz0kgjC9QQdYvN3RGWtfaMzj9BYR.png"
            alt="Acorde Cervecería"
            className="h-48 md:h-72 lg:h-80 w-auto mx-auto"
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
            <Link href="#carta">Explora la Carta</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-background/60 text-background hover:bg-background/10 text-base px-8 rounded-sm bg-transparent"
          >
            <Link href="#nosotros">Nuestra Historia</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#nosotros" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-background/70" />
        </Link>
      </div>
    </section>
  )
}
