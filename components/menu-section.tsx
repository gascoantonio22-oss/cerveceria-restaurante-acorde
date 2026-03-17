"use client"

import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type MenuCategory = {
  id: string
  label: string
  title: string
  subtitle: string
  note?: string
  items: string[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "conservas",
    label: "Nuestras conservas",
    title: "Nuestras conservas",
    subtitle: "Salazones, conservas y bocados de barra para compartir.",
    items: [
      "Boquerones en vinagre con pan y tomate",
      "Anchoa 0'0 con pan y tomate",
      "Sardinas ahumadas con salmorejo",
      "Mejillones en escabeche con patatas fritas",
      "Gilda",
      "Chipirón relleno con anchoa",
      "Navajas con ajito frito, aceite de oliva y ralladura de lima",
    ],
  },
  {
    id: "embutidos",
    label: "Embutidos y chacinas",
    title: "Embutidos y chacinas",
    subtitle: "Una selección corta y muy clásica para picar sin rodeos.",
    items: [
      "Jamón ibérico de bellota",
      "Lomito ibérico de bellota",
      "Cecina de León",
      "Tabla de quesos",
      "Tabla de embutidos",
      "Mojama de atún con almendras fritas",
    ],
  },
  {
    id: "picar",
    label: "Para picar",
    title: "Para picar",
    subtitle: "La parte más informal de la carta, pensada para pedir al centro.",
    items: [
      "Tomate con ventresca y cebolla",
      "Ostra al natural",
      "Torreznos",
      "Croquetas de jamón",
      "Gamba a la plancha (5 uds)",
      "Berberechos al vapor",
      "Mejillones en salsa picante",
      "Cazón en adobo",
      "Tortillita de camarones",
      "Tortilla vaga de gambas al ajillo y papada",
      "Huevos fritos con gamba cristal",
      "Huevos rotos con jamón ibérico",
      "El bocadillo del 12",
    ],
  },
  {
    id: "carnes-pescados",
    label: "Carnes y pescados",
    title: "Carnes y pescados",
    subtitle: "Platos principales para alargar la comida o compartir en mesa.",
    items: [
      "Chuletillas de cordero",
      "Lomo bajo de vaca madurado",
      "Presa ibérica",
      "Sapito asado con patatas al horno (para 2 personas)",
    ],
  },
  {
    id: "guisos",
    label: "Nuestros guisos",
    title: "Nuestros guisos",
    subtitle: "Cuchara y recetario castizo, con sabor de casa.",
    note: "No disponibles de 16:00 a 20:00.",
    items: [
      "Callos, pata y morro",
      "Garbanzos con oreja",
    ],
  },
  {
    id: "postres",
    label: "Postres",
    title: "Postres",
    subtitle: "El cierre clásico de la casa, sin complicarse de más.",
    items: [
      "Flan de queso",
      "Mousse de chocolate en copa",
      "Corte de helado",
      "Milhoja de crema de mantequilla",
      "Arroz con leche a la asturiana",
    ],
  },
]

const menuShowcases: Partial<
  Record<
    MenuCategory["id"],
    {
      eyebrow: string
      title: string
      description: string
    }
  >
> = {
  conservas: {
    eyebrow: "Primera parada",
    title: "La barra abre la carta",
    description: "Una imagen que entra al inicio y se queda detrás como un acompañamiento sutil del primer pase.",
  },
  postres: {
    eyebrow: "Última parada",
    title: "La sobremesa cierra el viaje",
    description: "La misma foto desciende hasta el final para rematar la carta con un gesto visual más elegante.",
  },
}

export function MenuSection() {
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | undefined>("conservas")
  const [activeDesktopCategory, setActiveDesktopCategory] = useState("conservas")
  const activeMobileShowcase = activeMobileCategory ? menuShowcases[activeMobileCategory] : undefined
  const activeDesktopShowcase = menuShowcases[activeDesktopCategory]
  const showDesktopShowcase = Boolean(activeDesktopShowcase)
  const desktopShowcaseTransform =
    activeDesktopCategory === "conservas"
      ? "translateY(0)"
      : activeDesktopCategory === "postres"
        ? "translateY(calc(100% - 13.75rem))"
        : "translateY(calc(50% - 6.875rem))"

  return (
    <section id="carta" className="relative overflow-hidden bg-[#f2ede7] pt-12 pb-14 md:pt-16 md:pb-24 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden md:h-[38rem] lg:h-[42rem]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 scale-[1.025]">
            <Image
              src="/menu-barra-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_38%] opacity-[0.42] blur-[0.55px] brightness-[0.95] contrast-[0.95] saturate-[0.86] md:opacity-[0.48] lg:opacity-[0.54]"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(248,244,238,0.68)] md:bg-[rgba(248,244,238,0.6)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.34),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.24),rgba(242,237,231,0.18)_24%,rgba(242,237,231,0.28)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#f2ede7]/82 to-[#f2ede7]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f2ede7] via-[#f4efe8]/82 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent_78%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="mx-auto flex w-fit flex-col items-center">
            <span className="block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              El Mural de Acorde
            </span>
            <div className="mt-4 flex items-center justify-center gap-1.5 md:gap-3.5">
              <h2 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-none text-foreground">
                La Carta
              </h2>
              <div className="pointer-events-none relative h-[3.7rem] w-[3.7rem] shrink-0 translate-y-[0.2rem] opacity-85 md:h-[4.9rem] md:w-[4.9rem] md:translate-y-[0.25rem] lg:h-[5.6rem] lg:w-[5.6rem]">
                <Image
                  src="/gilda-mark.png"
                  alt="Gilda de Acorde"
                  fill
                  sizes="(max-width: 768px) 60px, 90px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Una carta pensada para el tapeo y para compartir: conservas y salazones de barra,
              embutidos clásicos, frituras, mariscos, platos castizos y algunas carnes y pescados para
              alargar la mesa.
            </p>
            <p>
              Producto sencillo, bien elegido y sin complicaciones. De la gilda y los boquerones al
              jamón ibérico, los torreznos o unos buenos huevos rotos, con guisos de cuchara y platos
              para sentarse sin prisa.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity,margin] duration-700 ease-out md:hidden",
            activeMobileShowcase ? "mb-6 max-h-[19rem] opacity-100" : "mb-0 max-h-0 opacity-0",
          )}
        >
          <div className="relative mx-auto max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-white/40 shadow-[0_22px_50px_rgba(0,0,0,0.14)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/menu-barra-bg.jpg"
                alt="Barra y ambiente de Acorde"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover object-[center_40%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,11,8,0.06),rgba(16,11,8,0.2)_38%,rgba(16,11,8,0.72)_100%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-white/65">
                {activeMobileShowcase?.eyebrow}
              </p>
              <p className="mt-2 font-serif text-[1.55rem] leading-none">
                {activeMobileShowcase?.title}
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <Accordion
            type="single"
            collapsible
            value={activeMobileCategory}
            onValueChange={(value) => setActiveMobileCategory(value || undefined)}
            className="mx-auto max-w-3xl rounded-[1.5rem] border border-border/80 bg-card/90 shadow-[0_24px_50px_rgba(0,0,0,0.07)] backdrop-blur-sm"
          >
            {menuCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border-border px-5">
                <AccordionTrigger className="relative items-center justify-center py-5 text-center hover:no-underline [&>svg]:absolute [&>svg]:right-0 [&>svg]:top-1/2 [&>svg]:size-5 [&>svg]:-translate-y-1/2 [&>svg]:translate-x-0">
                  <div className="w-full px-10 text-center">
                    <span className="block font-serif text-[1.32rem] leading-[1.02] text-foreground sm:text-[1.45rem]">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="mx-auto max-w-[21rem] text-center text-sm leading-relaxed text-muted-foreground">
                    {category.subtitle}
                  </p>
                  {category.note ? (
                    <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-primary/80">
                      {category.note}
                    </p>
                  ) : null}
                  <div className="mt-5 space-y-3">
                    {category.items.map((item, index) => (
                      <article
                        key={item}
                      className="rounded-[1rem] border border-border/70 bg-background/80 px-4 py-3"
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-handwriting text-xl leading-none text-primary/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="font-medium leading-snug text-foreground">{item}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Tabs
          value={activeDesktopCategory}
          onValueChange={setActiveDesktopCategory}
          className="hidden gap-6 md:flex md:flex-col md:items-center"
        >
          <div className="flex w-full justify-center overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="mx-auto min-w-max h-auto gap-1 rounded-full bg-foreground/[0.04] p-1">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative w-full max-w-[61rem]">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden xl:block">
              <div className="absolute inset-y-8 right-0 w-[15.75rem]">
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-[13.75rem] overflow-hidden rounded-[1.85rem] border border-white/46 shadow-[0_26px_60px_rgba(0,0,0,0.14)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    showDesktopShowcase ? "opacity-100 blur-0" : "opacity-0 blur-sm",
                  )}
                  style={{ transform: desktopShowcaseTransform }}
                >
                  <Image
                    src="/menu-barra-bg.jpg"
                    alt="Barra principal de Acorde"
                    fill
                    sizes="252px"
                    className="object-cover object-[center_40%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,12,0.08),rgba(24,16,12,0.14)_34%,rgba(24,16,12,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-white/62">
                      {activeDesktopShowcase?.eyebrow ?? ""}
                    </p>
                    <p className="mt-2 font-serif text-[1.72rem] leading-none">
                      {activeDesktopShowcase?.title ?? ""}
                    </p>
                    <p className="mt-3 max-w-[11rem] text-sm leading-relaxed text-white/72">
                      {activeDesktopShowcase?.description ?? ""}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-[-4.75rem] w-28 bg-gradient-to-r from-[#f8f4ee] via-[#f8f4ee]/82 to-transparent" />
              </div>
            </div>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="relative z-10 w-full">
                <div
                  className={cn(
                    "rounded-[2rem] border border-border/80 bg-card/92 p-8 shadow-[0_28px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-10",
                    showDesktopShowcase ? "xl:pr-[19rem]" : "xl:pr-10",
                  )}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        {category.label}
                      </span>
                      <h3 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground">
                        {category.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-muted-foreground">{category.subtitle}</p>
                    </div>
                    {category.note ? (
                      <p className="text-sm text-muted-foreground md:max-w-xs md:text-right">{category.note}</p>
                    ) : null}
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {category.items.map((item, index) => (
                      <article
                        key={item}
                        className="rounded-[1rem] border border-border/70 bg-background/80 px-4 py-4 transition-colors hover:border-secondary hover:bg-background"
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-handwriting text-xl text-primary/70 leading-none">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="font-medium text-foreground leading-snug">{item}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="mt-10 flex justify-center md:hidden">
          <div className="flex items-center gap-3 text-primary/22">
            <div className="h-px w-10 bg-current" />
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <div className="h-px w-10 bg-current" />
          </div>
        </div>
      </div>
    </section>
  )
}
