import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="font-serif text-3xl font-semibold tracking-tight uppercase">
              Acorde
            </Link>
            <p className="text-sm tracking-widest uppercase text-white/70 mt-1">
              Cervecería
            </p>
            <p className="mt-6 text-white/80 leading-relaxed max-w-xs">
              El arte del tapeo tradicional en el corazón de Goya. 
              Donde cada detalle cuenta una historia.
            </p>
            {/* Mahou badge */}
            <div className="mt-6 inline-flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/60 tracking-wider">MAHOU</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Enlaces</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#nosotros" className="text-white/80 hover:text-white transition-colors">
                  La Cervecería
                </Link>
              </li>
              <li>
                <Link href="#carta" className="text-white/80 hover:text-white transition-colors">
                  Carta
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-white/80 hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#reservar" className="text-white/80 hover:text-white transition-colors">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-medium text-lg mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 text-white/80">
              <p>C. de Jorge Juan, 104</p>
              <p>Salamanca, 28009 Madrid</p>
              <p className="mt-2">
                <a href="tel:+34912345678" className="hover:text-white transition-colors">
                  +34 912 345 678
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Acorde Cervecería. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
