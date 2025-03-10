import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSlider from "@/components/hero-slider"
import FeatureCard from "@/components/feature-card"
import AboutSection from "@/components/about-section"
import PartnersSection from "@/components/partners-section"
import Logo from "@/components/logo"
import NavImages from "@/components/nav-images"
import InstructorImages from "@/components/instructor-images"
import GallerySection from "@/components/gallery-section"
import ClassSchedule from "@/components/class-schedule"
import TestimonialSection from "@/components/testimonial-section"
import ContactSection from "@/components/contact-section"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <MobileMenu />
            <Logo />
            <nav className="hidden gap-6 md:flex">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="#classes" className="text-sm font-medium transition-colors hover:text-primary">
                Classes
              </Link>
              <Link href="#instructors" className="text-sm font-medium transition-colors hover:text-primary">
                Instructors
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
            <NavImages />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]" />
            </div>
            <Button variant="default" size="sm" className="hidden sm:flex">
              Search
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSlider />

      {/* Why Dance With Us Section */}
      <section className="container py-12 md:py-16 lg:py-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Why Dance With Us?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="ballet"
            title="Professional Training"
            description="Our team of professional dance instructors are trained to prioritize technique, expression, and attention to detail."
          />
          <FeatureCard
            icon="styles"
            title="Diverse Dance Styles"
            description="We offer a range of dance styles to suit your interests, whether you're into ballet, hip-hop, contemporary, or ballroom."
          />
          <FeatureCard
            icon="community"
            title="Supportive Community"
            description="We believe that dancing should be an exciting and positive experience, not a stressful one."
          />
        </div>
      </section>

      {/* Class Schedule Section */}
      <ClassSchedule />

      {/* Instructors Section */}
      <section id="instructors" className="container py-12 md:py-16 lg:py-20">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Instructors</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
          Learn from our team of professional dancers with years of experience in teaching and performing. Our
          instructors are passionate about helping you achieve your dance goals.
        </p>
        <InstructorImages />
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Our Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Dance Studio. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

