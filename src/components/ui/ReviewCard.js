import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ReviewCard({ clientName, review, rating = 5 }) {
 const isTruncated = review.length > 250

  const shortReview = review.slice(0, 250) + (isTruncated ? "..." : "")

  return (
    <Card className="h-full border border-border">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-4">
          {/* Client Name + Stars */}
          <div>
            <h3 className="font-semibold text-heading mb-1">{clientName}</h3>
       <div
  role="img"
  aria-label={`Rating: ${rating} out of 5`}
  className="flex space-x-1"
>
  {[...Array(5)].map((_, index) => (
    <Star
      key={index}
      size={16}
      className={index < rating ? "text-[#facc15] fill-[#facc15]" : "text-muted-foreground"}
      aria-hidden="true"
      focusable="false"
    />
  ))}
</div>

          </div>

          {/* Truncated Review */}
          <blockquote className="text-body leading-relaxed">
            "{shortReview}"
          </blockquote>
        </div>

        {/* Read More Dialog */}
        {isTruncated && (
          <div className="mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="text-accent-700 underline underline-offset-2 text-base transition cursor-pointer"
                  aria-label={`Read full review from ${clientName}`}
                >
                  Read more
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-xl">{clientName}'s Full Review</DialogTitle>
                </DialogHeader>
                <blockquote className="text-body leading-relaxed mt-2">
                  "{review}"
                </blockquote>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
