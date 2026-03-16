// SVG Illustrations mimicking the mural style
function BoqueronIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10 Q10 5, 20 8 Q30 11, 38 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
    </svg>
  )
}

function MejillonIllustration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="15" rx="16" ry="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 10 Q20 20, 32 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

const conservas = [
  { name: "Gilda", description: "Aceituna, anchoa y guindilla" },
  { name: "Boquerones en vinagre", description: "Del día, con aceite de oliva" },
  { name: "Anchoas 0'0", description: "Del Cantábrico" },
  { name: "Mejillones en escabeche", description: "En lata premium" },
  { name: "Sardinillas", description: "En aceite de oliva" },
  { name: "Berberechos al natural", description: "Selección gallega" },
]

const cervezas = [
  { name: "Mahou de Grifo", description: "Clásica, bien tirada", price: "2,80€" },
  { name: "Mahou 5 Estrellas", description: "La de siempre", price: "3,00€" },
  { name: "La Virgen Madrid", description: "Artesana madrileña", price: "4,50€" },
  { name: "Cervezas de temporada", description: "Pregunta al equipo", price: "Varía" },
]

const vermuts = [
  { name: "Vermú de la casa", description: "Con aceituna y naranja", price: "3,50€" },
  { name: "Luis XIV", description: "Reserva especial", price: "4,50€" },
  { name: "Verdejo D.O. Rueda", description: "Fresco y afrutado", price: "3,50€" },
  { name: "Crianza D.O. Rioja", description: "Roble y fruta", price: "4,00€" },
]

export function MenuSection() {
  return (
    <section id="carta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Tile texture background */}
      <div className="absolute inset-0 bg-background" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Mural de Azulejos
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            La Carta
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tapas tradicionales, conservas premium y cervezas artesanas. 
            El sabor de Madrid en cada bocado.
          </p>
        </div>

        {/* Conservas Section - Mural Style */}
        <div className="mb-16 p-8 md:p-12 bg-card border border-border rounded-sm relative">
          {/* Decorative illustrations */}
          <div className="absolute top-4 right-4 opacity-20">
            <BoqueronIllustration className="w-16 h-8 text-accent" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <MejillonIllustration className="w-12 h-10 text-accent" />
          </div>

          <h3 className="font-handwriting text-4xl md:text-5xl text-center text-primary mb-2">
            Nuestras Conservas
          </h3>
          <p className="text-center text-muted-foreground mb-10 text-sm uppercase tracking-wider">
            Selección artesanal
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conservas.map((item) => (
              <div key={item.name} className="flex items-start gap-3 group">
                <span className="text-accent mt-1">•</span>
                <div>
                  <h4 className="font-handwriting text-2xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mahou badge */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-2.5 h-2.5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-muted-foreground tracking-wider">MAHOU DE GRIFO</span>
            </div>
          </div>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cervezas */}
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              De Barril
            </h3>
            <ul className="space-y-5">
              {cervezas.map((item) => (
                <li key={item.name} className="flex justify-between items-start gap-4 group">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <span className="text-accent font-medium whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vermuts y Vinos */}
          <div className="bg-primary/5 border border-primary/10 p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Vermuts y Vinos
            </h3>
            <ul className="space-y-5">
              {vermuts.map((item) => (
                <li key={item.name} className="flex justify-between items-start gap-4 group">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <span className="text-primary font-medium whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
