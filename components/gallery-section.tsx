import Image from "next/image"

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    alt: "Fachada de Acorde Cervecería",
    className: "col-span-2 row-span-2",
    label: "La Fachada",
  },
  {
    src: "/gallery-2.jpg",
    alt: "Mesa del comedor interior de Acorde",
    className: "col-span-1 row-span-1",
    label: "El Comedor",
  },
  {
    src: "/gallery-3.jpg",
    alt: "Gambas servidas junto a la ventana",
    className: "col-span-1 row-span-1",
    label: "La Barra",
  },
  {
    src: "/gallery-4.jpg",
    alt: "Mesa junto al ventanal con vistas a Jorge Juan",
    className: "col-span-1 row-span-2",
    label: "La Ventana",
  },
  {
    src: "/gallery-5.jpg",
    alt: "Botellas, copas colgantes y mural de azulejos en la barra",
    className: "col-span-1 row-span-1",
    label: "El Mural",
  },
  {
    src: "/gallery-6.jpg",
    alt: "Barra principal iluminada de Acorde",
    className: "col-span-1 row-span-1",
    label: "La Barra",
  },
  {
    src: "/gallery-7.jpg",
    alt: "Sala interior con mesas montadas y obra de arte",
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
            Un recorrido visual por la fachada, la barra y el comedor de Acorde tal y como se viven en casa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 auto-rows-[180px] md:grid-cols-3 md:auto-rows-[250px]">
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
