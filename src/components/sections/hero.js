"use client"
import { COMPANY_INFO } from "@/lib/constants"
import ConsultationForm from "@/components/forms/consultation-form"
import { Phone } from "lucide-react"

export default function Hero({ title, subtitle, imgsrc }) {
  const heroTitle = title || "Data Recovery Services"
  const heroDescription =
    subtitle ||
    "Professional recovery for damaged, clicking, or failed hard drives. Our clean room facilities and expert technicians ensure maximum data recovery success."
  const imageSrc =
    imgsrc || "https://www.pitsdatarecovery.com/wp-content/uploads/2025/01/hard-drive-1024x683.webp"

  return (
    <section
      className="relative w-full text-white py-14"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6">
            {heroDescription}
          </p>
          <div className="bg-black/40 p-4 rounded-md inline-block">
            <p className="mb-2 text-sm text-white">Need Help Now? Call Our Experts:</p>
            <a
              href={`tel:${COMPANY_INFO.phone.tel}`}
              className="flex items-center justify-center lg:justify-start gap-3 text-4xl sm:text-5xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              <Phone size={36} strokeWidth={1.5} />
              {COMPANY_INFO.phone.display}
            </a>
          </div>
        </div>

        <div className="w-full lg:max-w-md">
          <ConsultationForm
            formTitle="HOW MUCH WILL IT COST?"
            formDescription="Get A Free, No-Obligation Quote"
            className="bg-accent w-full"
          />
        </div>
      </div>
    </section>
  )
}
