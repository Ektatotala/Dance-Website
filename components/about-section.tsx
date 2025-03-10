import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=600&auto=format&fit=crop"
              alt="Dance instructor teaching a class"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">About Us</h2>
            <p className="mb-4 text-muted-foreground">
              Welcome to <span className="font-bold">Dance Studio</span> — your trusted partner for an exceptional dance
              experience! We ensure a stress-free and enjoyable learning environment for dancers of all levels.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our professional instructors handle everything from basic steps to advanced choreography with utmost care,
              so you can settle into your dance journey effortlessly.
            </p>
            <blockquote className="mb-6 border-l-4 border-primary pl-4 italic">
              "Dancing with passion, with precision and joy — that's our promise to you."
            </blockquote>
            <Button asChild className="w-fit">
              <Link href="#classes">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

