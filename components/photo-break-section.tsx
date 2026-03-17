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
  return (
    <section
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-black bg-scroll bg-no-repeat md:bg-fixed",
        "h-[28vh] min-h-[10rem] md:h-[34vh] lg:h-[40vh]",
        "bg-[center_24%]",
        "bg-cover md:bg-[length:100%_auto]",
        heightClassName,
        positionClassName,
        sizeClassName,
      )}
      style={{ backgroundImage: "url('/acorde-fachada-hola.png')" }}
    >
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
