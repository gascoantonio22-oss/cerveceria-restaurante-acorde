"use client"

import { useEffect, useEffectEvent, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// SVG Illustration - Gilda (olive and anchovy on toothpick)
function GildaIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 5 L30 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="30" cy="25" rx="12" ry="8" fill="#4a7c59" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="30" cy="50" rx="10" ry="14" fill="#c4a77d" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="30" cy="80" rx="8" ry="6" fill="#8b0000" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const revealSection = useEffectEvent(() => {
    setIsVisible(true)
  })

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        revealSection()
        observer.disconnect()
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [revealSection])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative overflow-hidden rounded-t-[2.4rem] bg-[#fbf8f3] pt-12 pb-12 shadow-[0_-26px_70px_rgba(0,0,0,0.18)] md:rounded-t-[3.2rem] md:pt-20 md:pb-16 lg:rounded-t-[3.6rem] lg:pt-24 lg:pb-24"
    >
      <div className="absolute inset-x-0 top-4 flex justify-center md:hidden">
        <div className="h-px w-16 bg-border/55" />
      </div>
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a]/18 via-[#f5ebdf]/72 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-[#f6f1ea] to-[#f2ede7]" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-[radial-gradient(ellipse_at_center,rgba(244,238,231,0.74),transparent_74%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_center,rgba(228,163,76,0.13),transparent_74%)] blur-2xl" />
      {/* Floating illustration */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <GildaIllustration className="w-16 h-32 text-primary" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "flex justify-center pb-10 pt-4 transition-all duration-1000 ease-out md:pb-14 md:pt-1",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="flex items-center gap-4 text-secondary/70 md:gap-5">
            <div
              className={cn(
                "h-px bg-gradient-to-r from-transparent via-secondary to-secondary/10 transition-all duration-[1400ms] ease-out",
                isVisible ? "w-16 md:w-28" : "w-0",
              )}
            />
            <div
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_10px_rgba(196,167,125,0.14)] transition-all duration-[1400ms] ease-out",
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            />
            <div
              className={cn(
                "h-px bg-gradient-to-l from-transparent via-secondary to-secondary/10 transition-all duration-[1400ms] ease-out",
                isVisible ? "w-16 md:w-28" : "w-0",
              )}
            />
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div
            className={cn(
              "order-2 transition-all duration-1000 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 lg:order-1",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0",
            )}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Nuestra esencia
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              Tradición madrileña con alma artística
            </h2>
            <div className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-5 md:hidden">
                <p>
                  En Acorde nos gusta lo de siempre: una buena caña, una barra donde apoyarse y algo
                  rico para compartir. Recuperamos el espíritu de las cervecerías madrileñas de toda la
                  vida para que el plan vuelva a ser sencillo: quedar, picar algo y dejar que la
                  conversación se alargue.
                </p>
                <p>
                  La barra de mármol, la madera del comedor y el mural pintado a mano sobre azulejos
                  blancos conviven con el jamón recién cortado, el vermut iluminado y ese sonido de las
                  cañas que hace que apetezca quedarse un rato más.
                </p>
              </div>
              <div className="hidden space-y-6 md:block">
                <p>
                En Acorde nos gusta lo de siempre: una buena caña, una barra donde apoyarse y algo rico
                para compartir. Nacimos con la idea de recuperar el espíritu de las cervecerías
                madrileñas de toda la vida, esos sitios donde el plan era sencillo: quedar, picar algo y
                dejar que la conversación se alargue.
                </p>
                <p>
                La barra de mármol, la madera del comedor y las copas de cristal colgadas forman parte de
                ese ambiente clásico. Pero también hay un pequeño guiño artístico: un mural pintado a mano
                sobre azulejos blancos donde aparecen algunos de los grandes protagonistas del tapeo, la
                gilda, los boquerones y las conservas, como si fueran pequeñas piezas de arte cotidiano.
                </p>
                <p>
                Las botellas de vermut iluminadas, el jamón recién cortado y el sonido de las cañas al
                servirse hacen el resto. Un lugar para venir sin prisa, compartir unas tapas y disfrutar
                de ese Madrid que mezcla tradición, buen producto y un punto creativo.
                </p>
              </div>
            </div>

            {/* Decorative line with steel accent */}
            <div className="mt-8 md:mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-border via-secondary to-border" />
              <span className="font-handwriting text-2xl text-primary">una vida entera tirando cañas</span>
              <div className="h-px flex-1 bg-gradient-to-r from-border via-secondary to-border" />
            </div>
          </div>

          {/* Images */}
          <div
            className={cn(
              "order-1 relative transition-all duration-[1100ms] ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 lg:order-2",
              isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-[0.97] opacity-0",
            )}
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-secondary/18 bg-[radial-gradient(circle_at_center,rgba(228,163,76,0.12),transparent_72%)] blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/50 shadow-[0_28px_70px_rgba(0,0,0,0.12)]">
              <Image
                src="/acorde-fachada-hola.png"
                alt="Fachada de Acorde Cerveceria"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
