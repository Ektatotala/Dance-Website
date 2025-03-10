import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1000&auto=format&fit=crop"
        alt="Dance Studio Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="text-xl font-bold">Dance Studio</span>
    </Link>
  )
}

