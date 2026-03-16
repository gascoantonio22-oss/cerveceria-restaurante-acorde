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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "#nosotros", label: "La Cervecería" },
    { href: "#carta", label: "Carta" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <>
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
                src={isScrolled ? "/acorde-logo-no-gilda-outline.png" : "/acorde-logo-no-gilda.png"}
                alt="Acorde Cervecería"
                loading="eager"
                fetchPriority="high"
                className={`h-[3.35rem] md:h-14 lg:h-16 w-auto origin-left transition-all duration-300 ${isScrolled ? "scale-[1.04]" : "scale-100"}`}
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
              className={`md:hidden transition-opacity duration-200 ${isMobileMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/52 backdrop-blur-[3px]"
            aria-label="Cerrar menú"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[min(72vw,19.5rem)] border-l border-white/10 bg-black shadow-[-28px_0_70px_rgba(0,0,0,0.42)] animate-in slide-in-from-right-6 fade-in duration-200">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%,transparent_72%,rgba(255,255,255,0.015))]" />
            <div className="relative flex h-full flex-col px-8 pb-12 pt-24">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="absolute right-5 top-[max(1.35rem,env(safe-area-inset-top))] flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white/8"
              >
                <X className="h-[1.125rem] w-[1.125rem]" />
              </button>

              <div className="mt-12 flex flex-1 flex-col justify-start gap-[1.625rem]">
                {navLinks.map((link) => (
                  <SectionLink
                    key={link.href}
                    href={link.href}
                    className="font-sans text-[1.72rem] font-light leading-none tracking-[-0.02em] text-white/90 transition-opacity duration-200 hover:opacity-72"
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
    </>
  )
}
