import Link from "next/link"
import { Instagram } from "lucide-react"
import { SectionLink } from "@/components/section-link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#020202] py-16 text-white lg:py-20">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-flex justify-center">
            <img
              src="/acorde-logo-no-gilda.png"
              alt="Acorde Cervecería"
              className="h-28 w-auto md:h-32 lg:h-36"
            />
          </Link>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.72rem] uppercase tracking-[0.2em] text-white/48 md:text-xs">
            <SectionLink href="#nosotros" className="transition-colors hover:text-white/72">
              La Cervecería
            </SectionLink>
            <SectionLink href="#carta" className="transition-colors hover:text-white/72">
              Carta
            </SectionLink>
            <SectionLink href="#galeria" className="transition-colors hover:text-white/72">
              Galería
            </SectionLink>
            <SectionLink href="#contacto" className="transition-colors hover:text-white/72">
              Contacto
            </SectionLink>
            <Link href={reservationUrl} className="transition-colors hover:text-white/72">
              Reservar
            </Link>
          </div>

          <a
            href="https://www.instagram.com/acordecerveceria/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/44 transition-colors hover:text-white/75"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <div className="mt-10 w-full border-t border-white/8 pt-6 text-center">
            <p className="text-xs text-white/34">
              © {currentYear} Acorde Cervecería. Todos los derechos reservados.
            </p>
            <div className="mt-3 flex justify-center gap-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/28 md:text-[0.72rem]">
              <Link href="#" className="transition-colors hover:text-white/55">
                Privacidad
              </Link>
              <Link href="#" className="transition-colors hover:text-white/55">
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
