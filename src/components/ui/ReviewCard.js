import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

export function ReviewCard({ clientName, review, rating = 5 }) {
  return (
    <Card className="h-full border border-border">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Client Avatar */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <User size={24} className="text-body" />
            </div>
            <div>
              <h3 className="font-semibold text-heading mb-2">{clientName}</h3>
              {/* Star Rating */}
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${
                      index < rating
                        ? "text-[#facc15] fill-[#facc15]"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Text */}
          <blockquote className="text-body leading-relaxed">"{review}"</blockquote>
        </div>
      </CardContent>
    </Card>
  )
}
