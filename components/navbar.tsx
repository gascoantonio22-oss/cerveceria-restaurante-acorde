"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLink } from "@/components/section-link"

const reservationUrl =
  "https://widget.thefork.com/es/66d18784-cfb1-4312-80f3-1df9bd68ca73?utm_source=google.com&step=date"

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
              className={`h-12 md:h-14 lg:h-16 w-auto origin-left transition-all duration-300 ${
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
          <div className="hidden md:block">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </SectionLink>
              ))}
              <Button asChild className="w-full mt-2">
                <Link href={reservationUrl} onClick={() => setIsMobileMenuOpen(false)}>
                  Reservar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
