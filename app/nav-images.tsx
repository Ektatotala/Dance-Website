import Image from "next/image"

export default function NavImages() {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=100&auto=format&fit=crop"
          alt="Ballet"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1541904845547-0eaf866de1d6?q=80&w=100&auto=format&fit=crop"
          alt="Contemporary"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=100&auto=format&fit=crop"
          alt="Hip Hop"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

