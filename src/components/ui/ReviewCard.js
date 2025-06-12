import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ReviewCard({ clientName, review, rating = 5 }) {
  const isTruncated = review.length > 250;
  const shortReview = review.slice(0, 250) + (isTruncated ? "..." : "");

  return (
    <Card className="h-full border border-border">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-5">
          {/* Name & Stars */}
          <div className="space-y-2">
            <h3 className="text-heading text-lg font-semibold">
              {clientName}
            </h3>
            <div role="img" aria-label={`Rating: ${rating} out of 5`} className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={index < rating ? "text-accent fill-accent" : "text-muted-foreground/30"}
                />
              ))}
            </div>
          </div>

          {/* Truncated Review */}
          <blockquote className="text-body italic leading-relaxed border-l-4 border-accent/40 pl-4">
            {shortReview}
          </blockquote>
        </div>

        {/* Read More Dialog */}
        {isTruncated && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-accent text-sm font-medium px-0 h-auto py-2 hover:underline hover:bg-transparent cursor-pointer"
                  aria-label={`Read full review from ${clientName}`}
                >
                  Read full review →
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl border border-primary/10 shadow-xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-heading text-xl font-bold">
                    <Quote className="text-primary w-5 h-5" />
                    {clientName}'s Review
                  </DialogTitle>
                </DialogHeader>
                <div className="pt-6">
                  <blockquote className="text-body italic text-base leading-relaxed border-l-4 border-accent/40 pl-6">
                    {review}
                  </blockquote>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
