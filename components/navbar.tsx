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
            className="fixed inset-0 top-20 z-40 bg-black/18 backdrop-blur-[2px]"
            aria-label="Cerrar menú"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-4 top-[5.6rem] z-50 w-[min(18.5rem,calc(100vw-2rem))] origin-top-right rounded-[1.6rem] border border-border/70 bg-background/96 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className="rounded-[1rem] px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </SectionLink>
              ))}
            </div>

            <div className="mt-3 border-t border-border/70 pt-3">
              <a
                href={phoneHref}
                className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span>Llamar</span>
                <span className="text-foreground">{phoneNumber}</span>
              </a>
              <Button asChild className="w-full rounded-[1rem]">
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
