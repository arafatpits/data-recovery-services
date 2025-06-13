import { Shield, CheckCircle, Users } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceGrid from "@/components/sections/ServiceGrid";
import OurProcess from "@/components/sections/OurProcess";
import CustomerReview from "@/components/sections/CustomerReview";
import FinalCTA from "@/components/sections/FinalCta";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Hero from "@/components/sections/hero";
import PageCTA from "@/components/sections/PageCta";

export const metadata = {
  title: "Expert Data Recovery Services for Hard Drives, SSDs & RAID",
  description: "We help businesses recover lost data from hard drives, SSDs, RAID systems, and more. Fast, secure, and backed by a no data – no charge guarantee.",
}


const services = [
  {
    title: "Hard Drive Recovery",
    iconSrc: "/images/service-icons/hdd.svg",
    description:
      "Specialized recovery for damaged, corrupted, or failed internal hard disk drives.",
  },
  {
    title: "SSD Recovery",
    iconSrc: "/images/service-icons/ssd.svg",
    description:
      "Expert recovery solutions for solid-state drives with logical or hardware-level issues.",
  },
  {
    title: "RAID Recovery",
    iconSrc: "/images/service-icons/nas.svg",
    description:
      "Advanced RAID array data recovery for all configurations and failure scenarios.",
  },
  {
    title: "External Hard Drive Recovery",
    iconSrc: "/images/service-icons/hdd.svg",
    description:
      "Comprehensive recovery for USB-powered external HDDs affected by damage or data loss.",
  },
  {
    title: "Flash Drive Recovery",
    iconSrc: "/images/service-icons/flash-drive.svg",
    description:
      "Targeted recovery from USB flash drives with physical or logical failures.",
  },
  {
    title: "NAS Recovery",
    iconSrc: "/images/service-icons/nas.svg",
    description:
      "Data restoration for network-attached storage devices with RAID or standalone setups.",
  },
  {
    title: "Server Recovery",
    iconSrc: "/images/service-icons/server.svg",
    description:
      "Critical server data recovery for physical, virtual, or enterprise-level infrastructures.",
  },
  {
    title: "Apple Device Recovery",
    iconSrc: "/images/service-icons/laptop.svg",
    description:
      "Recovery services tailored for macOS devices, including MacBooks, iMacs, and Mac Pro systems.",
  },
];

export default function HomePage() {
  return (
    <>
   
   <Hero/>
      <section className="pt-10 lg:pt-16 pb-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: Content */}
            <div className="text-left sm:text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-2 leading-tight">
                Can't Access Your Data?
              </h2>
              <p className="text-accent-600 text-2xl font-medium mb-4">
                We Help Recover What Matters Most
              </p>
              <p className="text-base lg:text-lg sm:mx-auto lg:mx-0 text-body max-w-xl mb-6 leading-relaxed">
                Whether it's a single hard drive, SSD, or a complex RAID system,
                our specialists work quickly to diagnose the issue and restore
                your data securely, accurately, and with full transparency at
                every step.
              </p>

              {/* Trust Items - Icons + Titles only, wrap on mobile */}
              <div className="flex flex-wrap justify-start sm:justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">
                    No Data, No Fee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">
                    Free Consultation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-heading">
                    Certified Experts
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center text-base w-full sm:w-auto px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary-800 transition-colors duration-200"
              >
                Get Your Free Consultation Now
              </a>

              <p className="text-xs text-center lg:text-left text-muted-foreground mt-2">
                No commitment required • Response within 24 hours
              </p>
            </div>

            {/* RIGHT: Direct Image */}
            <Image
              src="/images/services-bg/data-recovery-workspace.webp"
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
          <SectionHeader
            title="Our Comprehensive Data Recovery Services"
            description={null}
          />

          <ServiceGrid services={services} />
        </div>
      </section>
      <PageCTA/>
      <WhyChooseUs />
      <OurProcess />
      <CustomerReview />
      <FinalCTA />
    </>
  );
}
