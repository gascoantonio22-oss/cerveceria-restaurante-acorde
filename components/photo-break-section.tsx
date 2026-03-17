import { cn } from "@/lib/utils"

type PhotoBreakSectionProps = {
  positionClassName?: string
  heightClassName?: string
  topFadeClassName?: string
  bottomFadeClassName?: string
}

export function PhotoBreakSection({
  positionClassName,
  heightClassName,
  topFadeClassName,
  bottomFadeClassName,
}: PhotoBreakSectionProps) {
  return (
    <section
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-black bg-cover bg-scroll bg-no-repeat md:bg-fixed",
        "h-[40vh] min-h-[18rem] md:h-[52vh] lg:h-[62vh]",
        "bg-[center_24%]",
        heightClassName,
        positionClassName,
      )}
      style={{ backgroundImage: "url('/acorde-fachada-hola.png')" }}
    >
      <span className="absolute inset-0 bg-black/42 md:bg-black/32" />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.68),rgba(0,0,0,0.12)_34%,rgba(0,0,0,0.18)_64%,rgba(0,0,0,0.72))]" />
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbf8f3] via-[#fbf8f3]/72 to-transparent",
          topFadeClassName,
        )}
      />
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]",
          bottomFadeClassName,
        )}
      />
    </section>
  )
}
