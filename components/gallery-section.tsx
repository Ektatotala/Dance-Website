import Image from "next/image"

export default function GallerySection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">Dance Gallery</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
        Explore moments from our classes, performances, and events
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop"
            alt="Dance performance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop"
            alt="Contemporary dance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=400&auto=format&fit=crop"
            alt="Street dance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=400&auto=format&fit=crop"
            alt="Ballet class"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=400&auto=format&fit=crop"
            alt="Hip hop dance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=400&auto=format&fit=crop"
            alt="Dance studio"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=400&auto=format&fit=crop"
            alt="Ballet performance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=400&auto=format&fit=crop"
            alt="Group dance"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

