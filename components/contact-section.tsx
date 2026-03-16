import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.94))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-white/55">
              Jorge Juan, Madrid
            </span>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl font-medium">
              Visítanos
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-white/72 leading-relaxed">
              Aquí tienes la dirección, el mapa y la forma más rápida de reservar sin pasar por formulario.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.18fr] xl:items-start">
            <div className="rounded-sm border border-white/12 bg-white/[0.04] p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-white/[0.03] border border-white/12 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Dirección</h3>
                    <p className="mt-1 text-white/70">
                      C. de Jorge Juan, 104<br />
                      Salamanca, 28009 Madrid
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-white/[0.03] border border-white/12 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Horarios</h3>
                    <p className="mt-1 text-white/70">
                      Lunes a Jueves: 12:00 - 00:00<br />
                      Viernes y Sábado: 12:00 - 01:00<br />
                      Domingo: 12:00 - 23:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-white/[0.03] border border-white/12 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Teléfono</h3>
                    <p className="mt-1 text-white/70">
                      <a href="tel:+34912345678" className="hover:text-white transition-colors">
                        +34 912 345 678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-white/[0.03] border border-white/12 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="mt-1 text-white/70">
                      <a href="mailto:hola@acorde.es" className="hover:text-white transition-colors">
                        hola@acorde.es
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-start">
                <Button asChild size="lg" className="rounded-sm bg-white text-black hover:bg-white/90">
                  <Link href={reservationUrl}>Reservar</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[5/4] bg-white/[0.04] rounded-sm overflow-hidden relative border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.24)] xl:aspect-[16/11]">
                <iframe
                  title="Mapa de Acorde Cervecería"
                  src="https://www.google.com/maps?q=C.%20de%20Jorge%20Juan%2C%20104%2C%20Salamanca%2C%2028009%20Madrid&z=17&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute left-4 top-4 bg-black/78 backdrop-blur-md px-4 py-3 rounded-sm border border-white/10 shadow-sm">
                  <p className="font-serif text-lg text-white">C. de Jorge Juan, 104</p>
                  <p className="text-sm text-white/65">Salamanca, 28009 Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
