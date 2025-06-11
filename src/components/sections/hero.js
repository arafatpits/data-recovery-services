"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useEffect } from "react"
import { COMPANY_INFO } from "@/lib/constants"
import ConsultationForm from "@/components/forms/consultation-form"
import { Phone } from "lucide-react"

export default function Hero() {
  const searchParams = useSearchParams()
  const keyword = searchParams?.get("keyword")?.toLowerCase() || ""

  // Update page title based on keyword
  useEffect(() => {
    if (keyword.includes("hard drive")) {
      document.title = "Hard Drive Data Recovery - Get Your Files Back"
    } else if (keyword.includes("ssd")) {
      document.title = "SSD Data Recovery - Professional Service"
    } else if (keyword.includes("raid")) {
      document.title = "RAID Data Recovery - Expert Solutions"
    } else if (keyword.includes("flash drive")) {
      document.title = "Flash Drive Data Recovery - Restore Your Files"
    } else if (keyword.includes("nas")) {
      document.title = "NAS Data Recovery - Network Storage Solutions"
    } else if (keyword.includes("server")) {
      document.title = "Server Data Recovery - Enterprise Solutions"
    }
    // If no keyword matches, keep the default title from metadata
  }, [keyword])

  const content = useMemo(() => {
    if (keyword.includes("hard drive")) {
      return {
        title1: "Lost Hard Drive Data?",
        title2: "We Can Recover It.",
        subtitle: "Our engineers specialize in hard drive recovery.",
        imgsrc: "/images/data-recovery-workspace.jpg",
      }
    } else if (keyword.includes("ssd")) {
      return {
        title1: "SSD Failed or Corrupted?",
        title2: "We Recover Your Files Safely.",
        subtitle: "Advanced recovery for modern solid-state drives.",
        imgsrc: "/images/data-recovery-workspace.jpg",
      }
    }
    return {
      title1: "Lost Your Data?",
      title2: "We'll Help You Get It Back.",
      subtitle: "Whether it's a drive, RAID, or flash device — we recover it.",
      imgsrc: "/images/data-recovery-workspace.jpg",
    }
  }, [keyword])

  return (
    <section
      className="relative w-full text-white py-14"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${content.imgsrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 text-left sm:text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {content.title1 && <span>{content.title1}</span>}
            {content.title2 && (
              <>
                <br />
                <span>{content.title2}</span>
              </>
            )}
          </h1>

          {content.subtitle && (
            <p className="text-base sm:text-lg lg:text-xl max-w-xl sm:mx-auto lg:mx-0 mb-6">{content.subtitle}</p>
          )}

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
