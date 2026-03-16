import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#050505] py-24 text-white lg:py-28">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fbf8f3] via-[#7d6858]/10 to-transparent" />
      <div className="absolute left-1/2 top-0 h-24 w-60 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)] blur-3xl motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-700" />
      <div className="absolute inset-x-0 top-5 flex justify-center">
        <div className="flex items-center gap-3 text-white/22">
          <div className="h-px w-10 bg-current" />
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
          <div className="h-px w-10 bg-current" />
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(178,127,86,0.18),transparent_26%),radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.07),transparent_20%),linear-gradient(to_bottom,rgba(0,0,0,0.82),rgba(0,0,0,0.96))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-white/55">
              Jorge Juan, Madrid
            </span>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl font-medium">
              Visítanos
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
              Aquí tienes la dirección, el mapa y la forma más rápida de reservar, sin pasar por formularios.
            </p>
            <div className="mt-7 flex items-center justify-center gap-4 text-white/55">
              <div className="h-px w-14 bg-white/18" />
              <span className="font-handwriting text-[1.9rem] leading-none text-white/70">
                En Madrid, las mejores historias empiezan en una barra.
              </span>
              <div className="h-px w-14 bg-white/18" />
            </div>

            <div className="mt-10 flex flex-col items-center gap-8 text-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full border border-white/15 bg-white px-8 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.26)] transition-all hover:-translate-y-0.5 hover:bg-white/92"
              >
                <Link href={reservationUrl}>Reservar</Link>
              </Button>
              <div className="flex items-center gap-3 text-white/34">
                <div className="h-px w-12 bg-current/70" />
                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                <div className="h-px w-24 bg-current/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                <div className="h-px w-12 bg-current/70" />
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="order-2 lg:order-1">
              <div className="grid gap-5 rounded-[1.75rem] border border-white/7 bg-white/[0.02] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
                    <MapPin className="h-3.5 w-3.5 text-white/82" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Dirección</p>
                    <p className="mt-2 font-serif text-xl leading-tight text-white md:text-[1.55rem]">
                      C. de Jorge Juan, 104
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/62 md:text-base">
                      Salamanca, 28009 Madrid
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-white/16 via-white/8 to-transparent" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
                      <Clock className="h-3.5 w-3.5 text-white/82" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Horarios</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/64 md:text-[0.95rem]">
                        Lunes: Cerrado
                        <br />
                        Martes: Cerrado
                        <br />
                        Miércoles a Sábado: 13:00 - 23:30
                        <br />
                        Domingo: 13:00 - 16:30
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
                        <Phone className="h-3.5 w-3.5 text-white/82" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Teléfono</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/64 md:text-[0.95rem]">
                          <a href="tel:+34914213674" className="transition-colors hover:text-white">
                            914 21 36 74
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03]">
                        <Mail className="h-3.5 w-3.5 text-white/82" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Email</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/64 md:text-[0.95rem]">
                          <a href="mailto:hola@acorde.es" className="transition-colors hover:text-white">
                            hola@acorde.es
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] border border-white/8" />
                <div className="absolute -left-3 top-8 hidden h-28 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
                <div className="absolute -right-3 bottom-8 hidden h-28 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/[0.04] shadow-[0_28px_70px_rgba(0,0,0,0.35)] xl:aspect-[16/11]">
                  <iframe
                    title="Mapa de Acorde Cervecería"
                    src="https://www.google.com/maps?q=C.%20de%20Jorge%20Juan%2C%20104%2C%20Salamanca%2C%2028009%20Madrid&z=17&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8 lg:pt-12">
            <div className="flex items-center gap-3 text-white/40">
              <div className="h-px w-16 bg-current/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-current" />
              <div className="h-px w-16 bg-current/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
