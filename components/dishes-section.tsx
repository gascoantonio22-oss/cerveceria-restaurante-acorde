import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const featuredDishes = [
  {
    name: "Jamón Ibérico",
    description: "Cortado a cuchillo, de bellota. Servido con pan con tomate.",
    price: "18,00€",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Bravas Acorde",
    description: "Nuestra receta secreta con alioli de trufa y brava tradicional.",
    price: "8,50€",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1988&auto=format&fit=crop",
  },
  {
    name: "Tortilla de Betanzos",
    description: "Jugosa por dentro, con cebolla caramelizada lentamente.",
    price: "12,00€",
    image: "https://images.unsplash.com/photo-1599480757656-9da4f1e0f6fc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Croquetas de Jamón",
    description: "Cremosas por dentro, crujientes por fuera. Receta tradicional.",
    price: "9,00€",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop",
  },
]

export function DishesSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              De nuestra cocina
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
              Platos Destacados
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Tapas de autor que rinden homenaje a los sabores de siempre, 
            elaboradas con productos de primera calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <Card
              key={dish.name}
              className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 rounded-sm"
            >
              {/* Metallic-style top border */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-sm">
                  <span className="text-primary font-semibold text-sm">{dish.price}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-handwriting text-2xl text-card-foreground group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
