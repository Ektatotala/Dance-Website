import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Ballet Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote: "The instructors at Dance Studio are incredible. I've improved so much in just a few months!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "My daughter loves her classes here. The supportive environment has really helped her confidence.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Hip Hop Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "I've tried many dance studios, but this one truly feels like home. The community is amazing!",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">What Our Students Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-card p-6 shadow-sm">
              <div className="mb-4 flex justify-center">
                <Quote className="h-10 w-10 text-primary/30" />
              </div>
              <p className="mb-6 text-center italic">{testimonial.quote}</p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

