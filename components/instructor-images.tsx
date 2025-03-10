import Image from "next/image"

export default function InstructorImages() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="relative h-64 overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1541904845547-0eaf866de1d6?q=80&w=300&auto=format&fit=crop"
          alt="Ballet Instructor"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white">
          <h4 className="font-bold">Sarah</h4>
          <p className="text-sm">Ballet</p>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=300&auto=format&fit=crop"
          alt="Contemporary Instructor"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white">
          <h4 className="font-bold">Michael</h4>
          <p className="text-sm">Contemporary</p>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=300&auto=format&fit=crop"
          alt="Hip Hop Instructor"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white">
          <h4 className="font-bold">Jason</h4>
          <p className="text-sm">Hip Hop</p>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=300&auto=format&fit=crop"
          alt="Jazz Instructor"
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 w-full bg-black/60 p-2 text-white">
          <h4 className="font-bold">Emma</h4>
          <p className="text-sm">Jazz</p>
        </div>
      </div>
    </div>
  )
}

