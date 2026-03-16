"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLink } from "@/components/section-link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"
const phoneNumber = "914 21 36 74"
const phoneHref = "tel:+34914213674"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`)
      window.scrollTo(0, 0)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#nosotros", label: "La Cervecería" },
    { href: "#carta", label: "Carta" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={
                isScrolled
                  ? "/acorde-logo-completo.png"
                  : "/acorde-logo-principal-transparent.png"
              }
              alt="Acorde Cervecería"
              loading="eager"
              fetchPriority="high"
              className={`h-[3.35rem] md:h-14 lg:h-16 w-auto origin-left transition-all duration-300 ${
                isScrolled ? "scale-[1.08]" : "scale-100"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </SectionLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={phoneHref}
              className={`text-sm font-medium tracking-[0.12em] uppercase transition-colors hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {phoneNumber}
            </a>
            <Button
              asChild
              className={`transition-all ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
            >
              <Link href={reservationUrl}>Reservar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-[3px]"
            aria-label="Cerrar menú"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-4 top-[5.55rem] z-50 w-[min(17rem,calc(100vw-2.2rem))] origin-top-right overflow-hidden rounded-[2rem] border border-white/10 bg-[#17120f]/90 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.4)] ring-1 ring-white/5 backdrop-blur-xl animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(124,48,37,0.18) 0%, transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0) 32%)",
              }}
            />

            <div className="relative flex flex-col gap-1 px-1 pt-1">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-[1.15rem] px-4 py-3.5 text-[#f5ede2] transition-all hover:bg-white/[0.04]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-serif text-[1.05rem]">{link.label}</span>
                  <span className="h-px w-7 bg-white/10 transition-all group-hover:w-9 group-hover:bg-[#b98b72]/60" />
                </SectionLink>
              ))}
            </div>

            <div className="relative mt-2 border-t border-white/8 pt-3">
              <a
                href={phoneHref}
                className="flex items-center justify-between rounded-[1.1rem] px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#c7b3a0] transition-all hover:bg-white/[0.04] hover:text-[#f4ede4]"
              >
                <span>Llamar</span>
                <span className="text-[1.05rem] tracking-[0.18em] text-[#f4ede4]">{phoneNumber}</span>
              </a>
              <Button
                asChild
                className="mt-1 h-11 w-full rounded-full border border-[#8b4134]/30 bg-[#7a3126]/92 text-[#fff8f3] shadow-[0_10px_28px_rgba(73,20,14,0.28)] transition-all hover:bg-[#8a3a2d]"
              >
                <Link href={reservationUrl} onClick={() => setIsMobileMenuOpen(false)}>
                  Reservar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
