import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="container py-12 md:py-16 lg:py-20">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-lg md:h-full">
          <Image
            src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=600&auto=format&fit=crop"
            alt="Dance studio interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-muted-foreground">123 Dance Avenue, Rhythm City, RC 12345</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-muted-foreground">info@dancestudio.com</p>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="mb-2 font-semibold">Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <div>Monday - Friday</div>
              <div>9:00 AM - 9:00 PM</div>
              <div>Saturday</div>
              <div>9:00 AM - 5:00 PM</div>
              <div>Sunday</div>
              <div>Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

