"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useEffect, useState } from "react"
import { COMPANY_INFO } from "@/lib/constants"
import ConsultationForm from "@/components/forms/consultation-form"
import { Phone } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  const keyword = mounted ? searchParams?.get("keyword")?.toLowerCase() || "" : ""

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (keyword.includes("hard drive")) {
      document.title = "Hard Drive Data Recovery – Get Your Files Back"
    } else if (keyword.includes("external hard drive")) {
      document.title = "External Hard Drive Recovery – Reliable File Restoration"
    } else if (keyword.includes("ssd")) {
      document.title = "SSD Data Recovery – Professional Recovery Services"
    } else if (keyword.includes("raid")) {
      document.title = "RAID Data Recovery – Expert Multi-Drive Solutions"
    } else if (keyword.includes("nas")) {
      document.title = "NAS Data Recovery – Restore Data from Network Storage"
    } else if (keyword.includes("flash drive")) {
      document.title = "Flash Drive Data Recovery – Recover USB Drive Files"
    } else if (keyword.includes("server")) {
      document.title = "Server Data Recovery – Enterprise-Level File Recovery"
    } else if (keyword.includes("apple")) {
      document.title = "Apple Data Recovery – MacBook & iMac Solutions"
    } else if (keyword.includes("laptop")) {
      document.title = "Laptop Data Recovery – Windows & Mac Support"
    } else if (keyword.includes("quickbooks")) {
      document.title = "QuickBooks File Recovery – Restore QBW and Backup Files"
    } else {
      document.title = "Data Recovery Services – Restore Lost or Inaccessible Files"
    }
  }, [keyword, mounted])

  const content = useMemo(() => {
    if (!mounted) {
      // Return default content during SSR/static generation
      return {
        title1: "Lost Your Data?",
        title2: "We'll Help You Recover It.",
        subtitle:
          "From hard drives to RAID arrays — we provide secure recovery for all storage types and failure scenarios.",
        imgsrc: "/images/services-bg/hard-drive.webp",
      }
    }

    if (keyword.includes("hard drive")) {
      return {
        title1: "Hard Drive Data Lost?",
        title2: "We Recover Files from All Hard Drive Types.",
        subtitle: "Secure recovery from damaged, unresponsive, or failed internal and external hard drives.",
        imgsrc: "/images/services-bg/hard-drive.webp",
      }
    } else if (keyword.includes("ssd")) {
      return {
        title1: "Issues Accessing Your SSD?",
        title2: "Specialized SSD Data Recovery Services.",
        subtitle: "We handle data loss on SATA, NVMe, and PCIe SSDs with advanced tools and secure procedures.",
        imgsrc: "/images/services-bg/ssd.webp",
      }
    } else if (keyword.includes("raid")) {
      return {
        title1: "RAID Data Inaccessible?",
        title2: "We Recover Complex RAID Configurations.",
        subtitle: "Support for RAID 0, 1, 5, 6, 10, and more – including failed rebuilds and degraded arrays.",
        imgsrc: "/images/services-bg/raid.webp",
      }
    } else if (keyword.includes("nas")) {
      return {
        title1: "Lost Data on Your NAS Device?",
        title2: "Expert NAS Recovery Solutions.",
        subtitle: "Recovery support for Synology, QNAP, and other NAS units with disk, firmware, or network issues.",
        imgsrc: "/images/services-bg/raid.webp",
      }
    } else if (keyword.includes("external hard drive")) {
      return {
        title1: "Can't Access Files on Your External Drive?",
        title2: "We Recover Data from All Portable Drives.",
        subtitle:
          "From mechanical faults to accidental damage — we restore data from USB and portable external drives.",
        imgsrc: "/images/services-bg/external-hard-drive.webp",
      }
    } else if (keyword.includes("apple")) {
      return {
        title1: "Data Loss on Your Mac or Apple Device?",
        title2: "Apple-Specific Data Recovery Services.",
        subtitle:
          "We recover from MacBooks, iMacs, T2 chips, and Apple Silicon devices with file system or hardware issues.",
        imgsrc: "/images/services-bg/apple.webp",
      }
    } else if (keyword.includes("laptop")) {
      return {
        title1: "Laptop Files Missing or Inaccessible?",
        title2: "Professional Laptop Data Recovery.",
        subtitle:
          "We recover data from Windows and macOS laptops affected by crashes, hardware failure, or system errors.",
        imgsrc: "/images/services-bg/laptop.webp",
      }
    } else if (keyword.includes("quickbook")) {
      return {
        title1: "QuickBooks Data Unavailable?",
        title2: "We Recover Corrupt or Lost QB Files.",
        subtitle: "Expert recovery for QBW and backup files from local drives, servers, and damaged media.",
        imgsrc: "/images/services-bg/quickbooks.webp",
      }
    }

    // Fallback/default
    return {
      title1: "Lost Your Data?",
      title2: "We'll Help You Recover It.",
      subtitle:
        "From hard drives to RAID arrays — we provide secure recovery for all storage types and failure scenarios.",
      imgsrc: "/images/services-bg/hard-drive.webp",
    }
  }, [keyword, mounted])

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
          {content.title1 && <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{content.title1}</h1>}

          {content.title2 && (
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-accent mb-4 max-w-2xl leading-snug">
              {content.title2}
            </p>
          )}

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
