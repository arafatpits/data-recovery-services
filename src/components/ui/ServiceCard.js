import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({
  title,
  description = "Short description here",
  imageSrc = "/placeholder.svg",
  href = "#",
}) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus:ring-2 focus:ring-ring rounded-xl"
      aria-label={`Learn more about ${title}`}
    >
      <Card className="h-full overflow-hidden border border-border gap-0 bg-card shadow-sm transition hover:shadow-md py-0">
        <CardHeader className="p-0 gap-0">
          <div className="relative w-full h-48">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-t-xl"
              sizes="100vw"
            />
          </div>
        </CardHeader>

        <CardContent className="p-4 flex flex-col h-full">
          <h3 className="text-lg font-semibold leading-6 text-heading mb-2">{title}</h3>
          <p className="text-sm text-body flex-grow">{description}</p>

          <div className="mt-4 w-fit text-sm font-medium bg-primary text-white px-3 py-1.5 rounded transition-colors group-hover:bg-accent-600 inline-flex items-center gap-2">
            Learn More
            <ArrowRight size={14} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
