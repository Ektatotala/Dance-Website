import Image from "next/image"

interface FeatureCardProps {
  icon: "ballet" | "styles" | "community"
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIconUrl = (iconType: string) => {
    switch (iconType) {
      case "ballet":
        return "https://images.unsplash.com/photo-1595932545692-6cc0e2d93fb0?q=80&w=200&auto=format&fit=crop"
      case "styles":
        return "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=200&auto=format&fit=crop"
      case "community":
        return "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=200&auto=format&fit=crop"
      default:
        return "https://images.unsplash.com/photo-1595932545692-6cc0e2d93fb0?q=80&w=200&auto=format&fit=crop"
    }
  }

  return (
    <div className="rounded-lg bg-card p-6 shadow-sm">
      <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
        <Image
          src={getIconUrl(icon) || "/placeholder.svg"}
          alt={title}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

