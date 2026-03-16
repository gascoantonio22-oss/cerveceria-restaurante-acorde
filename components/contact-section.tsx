import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-muted relative">
      {/* Subtle tile texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Jorge Juan, Madrid
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Visítanos
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Aquí tienes la dirección, el mapa y la forma más rápida de reservar en TheFork sin pasar por formulario.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-sm border border-border bg-background p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Dirección</h3>
                  <p className="mt-1 text-muted-foreground">
                    C. de Jorge Juan, 104<br />
                    Salamanca, 28009 Madrid
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-background p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Horarios</h3>
                  <p className="mt-1 text-muted-foreground">
                    Lunes a Jueves: 12:00 - 00:00<br />
                    Viernes y Sábado: 12:00 - 01:00<br />
                    Domingo: 12:00 - 23:00
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-background p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Teléfono</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="tel:+34912345678" className="hover:text-primary transition-colors">
                      +34 912 345 678
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-background p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="mailto:hola@acorde.es" className="hover:text-primary transition-colors">
                      hola@acorde.es
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-background rounded-sm overflow-hidden relative border border-border shadow-sm">
              <iframe
                title="Mapa de Acorde Cervecería"
                src="https://www.google.com/maps?q=C.%20de%20Jorge%20Juan%2C%20104%2C%20Salamanca%2C%2028009%20Madrid&z=17&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute left-4 top-4 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-sm border border-border shadow-sm">
                <p className="font-serif text-lg text-foreground">C. de Jorge Juan, 104</p>
                <p className="text-sm text-muted-foreground">Salamanca, 28009 Madrid</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="rounded-sm">
                <Link href={reservationUrl}>Reservar en TheFork</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
