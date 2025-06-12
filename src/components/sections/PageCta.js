"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState, useEffect } from "react"
import { COMPANY_INFO } from "@/lib/constants"
import FormDialogButton from "../ui/FormDialogButton"

export default function PageCTA({ className = "" }) {
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  const keyword = mounted ? searchParams?.get("keyword")?.toLowerCase() || "" : ""

  useEffect(() => {
    setMounted(true)
  }, [])

  const { title, description } = useMemo(() => {
    if (!mounted) {
      // Return default content during SSR/static generation
      return {
        title: "Start Your Data Recovery Journey Today",
        description:
          "Our team is ready to help you get it back. Speak with a specialist or request a free quote today to start your recovery process.",
      }
    }

    if (keyword.includes("hard drive")) {
      return {
        title: "Need Help with a Hard Drive Failure?",
        description: "Whether it's clicking, dead, or not recognized — we specialize in secure hard drive recovery.",
      }
    } else if (keyword.includes("ssd")) {
      return {
        title: "SSD Not Responding or Showing Up?",
        description: "We recover data from NVMe, SATA, and PCIe SSDs with modern techniques and cleanroom handling.",
      }
    } else if (keyword.includes("raid")) {
      return {
        title: "RAID Array Not Accessible?",
        description:
          "Get expert recovery for RAID 0, 1, 5, 6, 10 setups with secure evaluation and no data, no charge guarantee.",
      }
    } else if (keyword.includes("nas")) {
      return {
        title: "Lost Files on Your NAS Device?",
        description:
          "We recover data from Synology, QNAP, and other NAS systems impacted by disk failure or corruption.",
      }
    } else if (keyword.includes("external hard drive")) {
      return {
        title: "External Drive Issues?",
        description:
          "Dropped or no longer showing up? Let our team recover your data from any brand of external hard drive.",
      }
    } else if (keyword.includes("apple")) {
      return {
        title: "Need Data Recovered from a Mac?",
        description: "We handle data loss on MacBook, iMac, and T2/Apple Silicon devices using Apple-safe procedures.",
      }
    } else if (keyword.includes("laptop")) {
      return {
        title: "Laptop Stopped Working?",
        description: "We recover files from both Windows and macOS laptops affected by physical damage or OS failure.",
      }
    } else if (keyword.includes("quickbook")) {
      return {
        title: "QuickBooks File Missing or Corrupted?",
        description:
          "Get professional recovery for QBW and backup files from crashed devices or failed storage systems.",
      }
    }

    // Fallback
    return {
      title: "Start Your Data Recovery Journey Today",
      description:
        "Our team is ready to help you get it back. Speak with a specialist or request a free quote today to start your recovery process.",
    }
  }, [keyword, mounted])

  return (
    <section className={`bg-primary-800 pt-16 pb-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-left sm:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{title}</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-3xl sm:mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-5 items-start sm:items-center">
          <div className="text-left sm:text-center">
            <p className="text-lg text-white/90 mb-2">Call for immediate assistance</p>
            <a
              href={`tel:${COMPANY_INFO.phone.tel}`}
              className="text-4xl md:text-5xl text-accent font-bold hover:underline block"
            >
              {COMPANY_INFO.phone.display}
            </a>
          </div>

          <div className="sm:pt-0">
            <FormDialogButton size="lg" className="text-lg text-white/90 hover:text-white underline underline-offset-4">
              or submit a form
            </FormDialogButton>
          </div>
        </div>
      </div>
    </section>
  )
}
