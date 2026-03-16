import Image from "next/image"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop",
    alt: "Interior cálido con el mural de azulejos y botellas de vermut retro-iluminadas",
    className: "col-span-2 row-span-2",
    label: "El Mural",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Barra de mármol con tiradores de cerveza Mahou",
    className: "col-span-1 row-span-1",
    label: "La Barra",
  },
  {
    src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2036&auto=format&fit=crop",
    alt: "Botellas de Vermut Luis XIV iluminadas",
    className: "col-span-1 row-span-1",
    label: "El Vermut",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    alt: "Detalle del acero inoxidable de la fachada",
    className: "col-span-1 row-span-2",
    label: "La Fachada",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Ambiente del restaurante con copas colgantes",
    className: "col-span-1 row-span-1",
    label: "El Ambiente",
  },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Arte y Atmósfera
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            Galería
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un recorrido visual por los rincones que hacen de Acorde 
            un lugar único en el barrio de Goya.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-sm group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-handwriting text-2xl text-background">{image.label}</span>
              </div>
              {/* Metallic frame effect on hover */}
              <div className="absolute inset-0 ring-2 ring-secondary/0 group-hover:ring-secondary/30 transition-all duration-300 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
