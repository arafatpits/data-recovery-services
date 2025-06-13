"use client"

import Image from "next/image"
import { COMPANY_INFO } from "@/lib/constants"
import ConsultationForm from "@/components/forms/consultation-form"
import { Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full text-white py-14 overflow-hidden">
      {/* Optimized static export-compatible image */}
      <Image
        src="/images/services-bg/hard-drive.webp"
        alt="Hard Drive Background"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 text-left sm:text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hard Drive Data Lost?
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-accent mb-4 max-w-2xl leading-snug">
            We Recover Files from All Hard Drive Types.
          </p>

          <p className="text-base sm:text-lg lg:text-xl max-w-xl sm:mx-auto lg:mx-0 mb-6">
            Secure recovery from damaged, unresponsive, or failed internal and external hard drives.
          </p>

          <div className="bg-black/40 p-4 rounded-md inline-block">
            <p className="mb-2 text-sm text-white">Need Help Now? Call Our Experts:</p>
            <a
              href={`tel:${COMPANY_INFO.phone.tel}`}
              className="flex items-center justify-start sm:justify-center lg:justify-start gap-3 text-4xl lg:text-5xl font-bold text-accent hover:text-accent-500 transition-colors"
            >
              <Phone size={28} className="shrink-0" strokeWidth={1.5} />
              {COMPANY_INFO.phone.display}
            </a>
          </div>
        </div>

        <div id="consultation-form" className="w-full sm:w-auto lg:max-w-md">
          <ConsultationForm className="bg-accent w-full" />
        </div>
      </div>
    </section>
  )
}
