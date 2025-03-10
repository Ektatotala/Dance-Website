import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [
  {
    id: 1,
    name: "Dance Academy",
    logo: "https://images.unsplash.com/photo-1560800452-f2d475982b96?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rhythm Nation",
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Move Studios",
    logo: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dance Gear",
    logo: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=200&auto=format&fit=crop",
  },
 
]

export default function PartnersSection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Partners</h2>
      <div className="relative">
        <div className="flex items-center justify-between space-x-8 overflow-hidden py-4">
          {partners.map((partner) => (
            <div key={partner.id} className="flex min-w-[200px] items-center justify-center rounded-lg p-4">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={75}
                className="h-auto max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous partners</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full md:flex"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next partners</span>
        </Button>
      </div>
    </section>
  )
}

