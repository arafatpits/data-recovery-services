import { Shield, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageShell from "@/components/layout/PageShell"
import Image from "next/image"
import PageCTA from "@/components/sections/PageCta"
import SectionHeader from "@/components/ui/SectionHeader"
import ServiceGrid from "@/components/sections/ServiceGrid"
import OurProcess from "@/components/sections/OurProcess"
import CustomerReview from "@/components/sections/CustomerReview"
import FinalCTA from "@/components/sections/FinalCta"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

const services = [
  {
    title: "Hard Drive Recovery",
    href: "/services/hard-drive-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "SSD Recovery",
    href: "/services/ssd-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "RAID Recovery",
    href: "/services/raid-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "External Hard Drive Recovery",
    href: "/services/external-hard-drive-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "Flash Drive Recovery",
    href: "/services/flash-drive-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "NAS Recovery",
    href: "/services/nas-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "Server Recovery",
    href: "/services/server-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
  {
    title: "Apple Device Recovery",
    href: "/services/apple-device-recovery",
    imageSrc: "/images/data-recovery-workspace.jpg",
  },
]


export default function HomePage() {
  return (
    <PageShell>
      <section className="pt-10 lg:pt-16 pb-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: Content */}
            <div className="text-left sm:text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-2 leading-tight">
                Can't Access Your Data?
              </h2>
              <p className="text-accent text-xl font-medium mb-4">We Help Recover What Matters Most</p>
              <p className="text-base lg:text-lg sm:mx-auto lg:mx-0 text-body max-w-xl mb-6 leading-relaxed">
                Whether it's a single hard drive, SSD, or a complex RAID system, our specialists work quickly to
                diagnose the issue and restore your data securely, accurately, and with full transparency at every step.
              </p>

              {/* Trust Items - Icons + Titles only, wrap on mobile */}
              <div className="flex flex-wrap justify-start sm:justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">No Data, No Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">Certified Experts</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-start sm:justify-center lg:justify-start">
                <Button size="lg" className="text-base w-full sm:w-auto">
                  Get Your Free Consultation Now
                </Button>
              </div>
              <p className="text-xs text-center lg:text-left text-muted-foreground mt-2">
                No commitment required • Response within 24 hours
              </p>
            </div>

            {/* RIGHT: Direct Image */}
            <Image
              src="/images/data-recovery-workspace.jpg"
              alt="Data Recovery Workspace"
              width={600}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="pt-10 lg:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Comprehensive Data Recovery Services" description={null} />

          <ServiceGrid services={services} />
        </div>
      </section>
      <PageCTA />
      <WhyChooseUs />
      <OurProcess />
      <CustomerReview />
      <FinalCTA />
    </PageShell>
  )
}
