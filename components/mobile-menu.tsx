"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="mb-8">
          <Logo />
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#classes"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Classes
          </Link>
          <Link
            href="#instructors"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Instructors
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

