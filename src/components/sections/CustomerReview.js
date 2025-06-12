"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "@/components/ui/ReviewCard";
import SectionHeader from "../ui/SectionHeader";

const reviews = [
  {
    clientName: "Caitlin Branham",
    review:
      "I cannot compare them to any other company because they did such an amazing job recovering my data from a damaged 2TB WD HDD. The last company that worked on my case couldn't recover even 1 file from it, but they did an amazing job and recovered all my data. It was a hit or miss because they were the last ones I was ready to trust, but they didn't let me down 👍",
  },
  {
    clientName: "Angi Carlston",
    review:
      "I sent my son's external drive to these guys with a hope and a prayer they would be able to recover the data. 9 years worth of data, photos of dating his wife, engagements and wedding. Their first child being born. Photos of our kids growing up, photos of his sister that passed away. Memories that would just break his heart if lost forever. A few months of work and viola! All restored and ready to be sent back on a new drive. Thank you ever so much for your hard work. ❤",
  },
  {
    clientName: "Yuchen He",
    review:
      "I accidentally formatted my sd cards, I went to them to ask for a recovery. They knew I was a student and were very considerate of me. They restored it quickly and gave me a discount. The customer service were very nice, and I deeply appreciate their professionalism and considerate service. The staff are friendly, always patient and polite, and can quickly understand my needs and provide effective solutions, which greatly shortens the problem-solving time. Thanks for letting me get all my photos back in a short time!",
  },
  {
    clientName: "Wayne Schillo",
    review:
      "I can't express how grateful I am to the team. I had an SSD crash and initially made the mistake of engaging the first Google result that came up. They wanted $5,000 and 2 weeks to recover the drive, which we know is simply ridiculous on both a time and turnaround standpoint. I found them through a friend who was searching for alternative options, and these guys are the real deal. Not only did they quote me a price that was 90% less than the other guys, they also recovered my drive within 24 hours of receiving it. No games, and excellent communication throughout. Further, they even went the extra mile, transferring my recovered data back to me over an FTP connection I set up, which meant I was literally back in action the very next day after they got my drive. I rarely write reviews online, but I feel like I need to share just how amazing they were, and let other people know that they are a fantastic group of guys. Highly recommended!",
  },
  {
    clientName: "David Lee",
    review:
      "My partner and I share one USB flash drive to store all of our data, whether it’s work-related or family pictures and videos. We basically use it daily and pass it back and forth whenever one of us needs it. On my birthday, we got a new puppy who loves to chew on everything he finds. I think you can guess what happened next. The second I wasn’t paying attention, he got his teeth on the flash drive and absolutely destroyed it. It was bent, cracked, and completely unrecognizable. I panicked because it was my fault for leaving it unattended, so I had to find a way to fix the mess. I found them nearby, explained my situation to them, and dropped off the device. I was so anxious—this tiny flash drive held years of memories and important work files. I was honestly preparing myself for the worst, thinking there was no way they could recover anything from such a badly damaged device. But to my surprise, the team was incredibly reassuring and professional. They examined the flash drive and explained the recovery process, which helped calm my nerves a bit. A few days later, I got the call—they recovered our data! Every single photo, video, and file was there as if nothing had ever happened. That was definitely our most expensive 'puppy-related' expense, but in the end, it was absolutely worth the cost!",
  },
  {
    clientName: "Tammy Heick",
    review:
      "I was beside myself and sick to my stomach... as my external hard drive with many years of pictures... failed! Unfortunately, I did not have them all saved elsewhere! I am so happy with the outcome! Not only were they able to recover all files, they were reasonable in price and had awesome customer service! They kept me well informed on the progress and ensured I was fully satisfied! If you experience the need for data recovery, I highly recommend this service!",
  },
  {
    clientName: "FAGBULE GABRIEL",
    review:
      "My external hard drive took a nasty fall, and I thought all my data was lost forever. They not only recovered everything but also fixed the physical damage. Superb customer service, transparent pricing, and lightning-fast turnaround. Couldn't be happier! The best data recovery company!",
  },
  {
    clientName: "FAGBULE GABRIEL",
    review:
      "My external hard drive took a nasty fall, and I thought all my data was lost forever. They not only recovered everything but also fixed the physical damage. Superb customer service, transparent pricing, and lightning-fast turnaround. Couldn't be happier! The best data recovery company!",
  },
  {
    clientName: "Lorenzo Altenwerth",
    review:
      "Bruh... More like 5 stars PLUS!!! They recovered 100% data of my memory unit, when many other places couldn't even help me, and did it with the best service I've ever had. I am so grateful with the above and beyond service that Eric and his team provided me.",
  },
  {
    clientName: "QAISER AYAZ",
    review:
      "This is by far the best data recovery service in the country. They are very professional, very fast, highly skilled and very nice people. My recommendation is, please don't go anywhere as they will rip you off. You cannot ask for a better place to recover your most precious informations.",
  },
  {
    clientName: "Caine Frame",
    review:
      "My hard drive suddenly had stopped working & I was in need of getting my files back considering I shoot videos. Sure enough, I called and Zach was very understanding and easy to talk to. I came and dropped off my hard drive & he updated me daily and was able to recover 100% of my data (1.2TB) with no damaged files within a couple of days. Great service, great communication! Very welcoming place! A+++++++ HIGHLY RECOMMEND!",
  },
];

export default function CustomerReview() {
  return (
    <section className="pt-10 lg:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          description="Hear from real customers who’ve trusted us with their most important data."
        />

        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="ml-0">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 md:px-4 md:basis-1/2 lg:basis-1/3"
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
              className="absolute cursor-pointer -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent hover:bg-accent-600 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Previous testimonials"
              role="button"
            />
            <CarouselNext
              className="absolute cursor-pointer -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent hover:bg-accent-600 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Next testimonials"
              role="button"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
