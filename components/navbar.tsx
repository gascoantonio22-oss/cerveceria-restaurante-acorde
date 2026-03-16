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
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/38 backdrop-blur-[2px]"
            aria-label="Cerrar menú"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[min(82vw,24rem)] bg-black/98 shadow-[-24px_0_80px_rgba(0,0,0,0.38)] animate-in slide-in-from-right-8 fade-in duration-300">
            <div className="flex h-full flex-col px-8 pb-10 pt-24">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="absolute right-6 top-14 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white/8"
              >
                <X className="h-7 w-7" />
              </button>

              <div className="flex flex-1 flex-col justify-center gap-9">
                {navLinks.map((link) => (
                  <SectionLink
                    key={link.href}
                    href={link.href}
                    className="text-[2.55rem] font-light tracking-[-0.04em] text-white transition-opacity duration-200 hover:opacity-72"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </SectionLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
