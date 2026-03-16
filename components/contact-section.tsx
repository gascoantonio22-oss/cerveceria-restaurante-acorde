"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    alert("¡Gracias! Hemos recibido tu solicitud de reserva. Te confirmaremos por teléfono o email.")
  }

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              En el Barrio de Goya
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Visítanos
            </h2>
            
            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-background border border-border flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Dirección</h3>
                  <p className="mt-1 text-muted-foreground">
                    Calle de Goya, 45<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-background border border-border flex items-center justify-center">
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

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-background border border-border flex items-center justify-center">
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

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-background border border-border flex items-center justify-center">
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

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video bg-background rounded-sm overflow-hidden relative border border-border">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                <div className="bg-background/95 backdrop-blur-sm px-8 py-5 rounded-sm text-center border border-border">
                  <p className="font-serif text-xl text-foreground">Barrio de Goya</p>
                  <p className="text-sm text-muted-foreground mt-1">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div id="reservar" className="lg:pt-16">
            <div className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-card-foreground">
                Reserva tu mesa
              </h3>
              <p className="mt-2 text-muted-foreground">
                Completa el formulario y nos pondremos en contacto para confirmar.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nombre completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background rounded-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background rounded-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground">Número de personas</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    placeholder="2"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="bg-background rounded-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground">Fecha</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="bg-background rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground">Hora</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="bg-background rounded-sm"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-sm">
                  Solicitar reserva
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Te confirmaremos la reserva en menos de 24 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
