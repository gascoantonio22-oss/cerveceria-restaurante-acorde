"use client"

import { useEffect, useEffectEvent, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type PhotoBreakSectionProps = {
  positionClassName?: string
  heightClassName?: string
  sizeClassName?: string
  topFadeClassName?: string
  bottomFadeClassName?: string
}

export function PhotoBreakSection({
  positionClassName,
  heightClassName,
  sizeClassName,
  topFadeClassName,
  bottomFadeClassName,
}: PhotoBreakSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [imageOffset, setImageOffset] = useState(0)

  const updateParallax = useEffectEvent(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const rect = section.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const viewportCenter = viewportHeight / 2
    const sectionCenter = rect.top + rect.height / 2
    const distanceFromCenter = sectionCenter - viewportCenter
    const maxDistance = (viewportHeight + rect.height) / 2
    const progress = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance))
    const isMobile = window.innerWidth < 768
    const amplitude = isMobile
      ? Math.min(52, Math.max(22, rect.height * 0.34))
      : Math.min(68, Math.max(24, rect.height * 0.24))

    setImageOffset(Math.round(-progress * amplitude))
  })

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setImageOffset(0)
      return
    }

    let ticking = false
    const handleUpdate = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(() => {
        updateParallax()
        ticking = false
      })
    }

    updateParallax()
    window.addEventListener("scroll", handleUpdate, { passive: true })
    window.addEventListener("resize", handleUpdate)

    return () => {
      window.removeEventListener("scroll", handleUpdate)
      window.removeEventListener("resize", handleUpdate)
    }
  }, [updateParallax])

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-black",
        "h-[28vh] min-h-[10rem] md:h-[34vh] lg:h-[40vh]",
        heightClassName,
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-[16%] -bottom-[16%] will-change-transform"
        style={{ transform: `translate3d(0, ${imageOffset}px, 0)` }}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[url('/acorde-fachada-hola.png')] bg-no-repeat",
            "bg-[center_24%]",
            "bg-[length:120%_auto] sm:bg-[length:112%_auto] md:bg-[length:102%_auto] lg:bg-[length:96%_auto]",
            positionClassName,
            sizeClassName,
          )}
        />
      </div>
      <span className="absolute inset-0 bg-black/34 md:bg-black/22" />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.54),rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.12)_64%,rgba(0,0,0,0.58))]" />
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#fbf8f3] via-[#fbf8f3]/66 to-transparent",
          topFadeClassName,
        )}
      />
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent via-[#0a0a0a]/24 to-[#0a0a0a]",
          bottomFadeClassName,
        )}
      />
    </section>
  )
}
