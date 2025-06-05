import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewCard } from "@/components/ui/ReviewCard"
import SectionHeader from "../ui/SectionHeader"
import { Description } from "@radix-ui/react-dialog"

export default function CustomerReview() {
  const reviews = [
    {
      clientName: "Sarah Johnson",
      review:
        "Exceptional service! They recovered all my important business files from a crashed hard drive. The team was professional and kept me updated throughout the entire process.",
    },
    {
      clientName: "Michael Chen",
      review:
        "I thought my family photos were gone forever after my laptop died. These experts worked miracles and recovered everything. Highly recommend their services!",
    },
    {
      clientName: "Emily Rodriguez",
      review:
        "Fast, reliable, and trustworthy. They recovered critical data from our server within 24 hours. Their no-data-no-fee policy gave us confidence in their service.",
    },
    {
      clientName: "David Thompson",
      review:
        "Outstanding customer service and technical expertise. They explained the entire recovery process and delivered exactly what they promised. Worth every penny!",
    },
    {
      clientName: "Lisa Wang",
      review:
        "Professional team that handled our emergency data recovery with care. They recovered years of accounting records that we thought were lost forever.",
    },
    {
      clientName: "Robert Martinez",
      review:
        "Incredible results! They recovered data from a water-damaged external drive that other companies said was impossible to recover. True experts in their field.",
    },
  ]

  return (
    <section className="pt-10 lg:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader title="What Our Clients Say" description="Hear from real customers who’ve trusted us with their most important data."/>
        {/* Carousel */}
        <div className="relative mx-auto max-w-[90%] md:max-w-[95%] lg:max-w-[90%]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ReviewCard
                    clientName={review.clientName}
                    review={review.review}
                    rating={5}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="absolute cursor-pointer -left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent hover:bg-accent-600 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Previous testimonials"
              role="button"
            />
            <CarouselNext
              className="absolute cursor-pointer -right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent hover:bg-accent-600 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Next testimonials"
              role="button"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
