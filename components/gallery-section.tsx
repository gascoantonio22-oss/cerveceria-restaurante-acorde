"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

type GalleryImage = {
  src: string
  alt: string
  label: string
  className: string
  fit?: "cover" | "contain"
  qualityNote?: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery-menu.png",
    alt: "Carta de Acorde Cervecería",
    label: "La Carta",
    className: "col-span-2 row-span-2 md:col-span-6 md:row-span-2",
    fit: "contain",
    qualityNote: "Ampliable en la mejor resolución disponible.",
  },
  {
    src: "/acorde-fachada-hola.png",
    alt: "Fachada de Acorde Cervecería",
    label: "La Fachada",
    className: "col-span-1 row-span-2 md:col-span-3 md:row-span-2",
  },
  {
    src: "/gallery-comedor.webp",
    alt: "Mesa del comedor interior de Acorde",
    label: "El Comedor",
    className: "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    src: "/gallery-ventana.webp",
    alt: "Mesa junto al ventanal con vistas a Jorge Juan",
    label: "La Ventana",
    className: "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    src: "/gallery-mural.jpg",
    alt: "Mural de azulejos, botellas y copas colgantes en la barra",
    label: "El Mural",
    className: "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
    qualityNote: "Foto cargada desde el original más nítido disponible.",
  },
  {
    src: "/gallery-barra.webp",
    alt: "Barra principal iluminada de Acorde",
    label: "La Barra",
    className: "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  },
  {
    src: "/gallery-sala.webp",
    alt: "Sala interior con mesas montadas y obra de arte",
    label: "El Ambiente",
    className: "col-span-1 row-span-1 md:col-span-4 md:row-span-1",
  },
  {
    src: "/gallery-gambas.webp",
    alt: "Plato de gambas servido junto a la ventana",
    label: "Las Gambas",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <section id="galeria" className="relative overflow-hidden bg-[#fbf8f3] pt-14 pb-20 md:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f2ede7] via-[#f8f5f0] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-black/6 to-black/22" />
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <div className="flex items-center gap-3 text-black/16">
          <div className="h-px w-12 bg-current" />
          <div className="h-1.5 w-1.5 rounded-full bg-current" />
          <div className="h-px w-12 bg-current" />
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Arte y Atmósfera
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium md:text-5xl lg:text-6xl">
            Galería
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Un recorrido por la carta, la fachada, la barra y el comedor.
          </p>
        </div>

        <div className="grid grid-cols-2 auto-rows-[170px] gap-4 md:grid-cols-12 md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-[1.35rem] border border-black/8 bg-black/5 text-left shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1 ${image.className}`}
              aria-label={`Abrir ${image.label}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                priority={index < 2}
                sizes={index === 0 ? "(max-width: 767px) 100vw, 52vw" : "(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 28vw"}
                className={`${image.fit === "contain" ? "object-contain p-2 md:p-3" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.03]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div>
                  <p className="font-handwriting text-2xl leading-none md:text-[2rem]">{image.label}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent
          showCloseButton={false}
          className="w-[min(96vw,1500px)] max-w-[96vw] border border-white/10 bg-black/95 p-3 text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:p-4"
        >
          {selectedImage ? (
            <div className="relative">
              <DialogTitle className="sr-only">{selectedImage.label}</DialogTitle>
              <DialogDescription className="sr-only">{selectedImage.alt}</DialogDescription>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-1 top-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/45 text-white transition-colors hover:bg-black/70"
                aria-label="Cerrar imagen"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="mx-auto max-h-[82vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 px-1 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-handwriting text-[2rem] leading-none text-white sm:text-[2.3rem]">
                    {selectedImage.label}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
