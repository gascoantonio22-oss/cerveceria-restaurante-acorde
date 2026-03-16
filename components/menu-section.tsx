import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export function MenuSection() {
  return (
    <section id="carta" className="relative overflow-hidden bg-[#f2ede7] pt-12 pb-14 md:pt-16 md:pb-24 lg:pt-24 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-[#f6f1eb] to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.28) 18%, rgba(0,0,0,1) 34%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.28) 18%, rgba(0,0,0,1) 34%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            El Mural de Acorde
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            La Carta
          </h2>
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

        <div className="md:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue="conservas"
            className="rounded-[1.5rem] border border-border/80 bg-card/90 shadow-[0_24px_50px_rgba(0,0,0,0.07)] backdrop-blur-sm"
          >
            {menuCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border-border px-5">
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      {category.label}
                    </span>
                    <span className="mt-2 block font-serif text-2xl text-foreground">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{category.subtitle}</p>
                  {category.note ? (
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-primary/80">
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

        <Tabs defaultValue="conservas" className="hidden gap-6 md:flex">
          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="min-w-max h-auto gap-1 rounded-full bg-foreground/[0.04] p-1">
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

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="rounded-[2rem] border border-border/80 bg-card/92 p-8 shadow-[0_28px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                      {category.label}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground max-w-2xl">{category.subtitle}</p>
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
