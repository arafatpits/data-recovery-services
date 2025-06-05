import { COMPANY_INFO } from "@/lib/constants"
import Link from "next/link"

export default function PageCTA({
  title = "Start Your Data Recovery Journey Today",
  description = " Our team is ready to help you get it back. Speak with a specialist or request a free quote today to start your recovery process.",
  className = "",
}) {
  return (
    <section className={`bg-primary-800 pt-16 pb-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading + Description */}
        <div className="text-left sm:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-3xl sm:mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Call and Form Section */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-5 items-start sm:items-center">
          {/* Call Section */}
          <div className="text-left sm:text-center">
            <p className="text-lg text-white/90 mb-2">Call for immediate assistance</p>
            <a
              href={`tel:${COMPANY_INFO.phone.tel}`}
              className="text-4xl md:text-5xl text-accent font-bold hover:underline block"
            >
              {COMPANY_INFO.phone.display}
            </a>
          </div>

          {/* Form Section */}
          <div className="sm:pt-0">
            <Link
              href="/contact"
              className="text-lg text-white/90 hover:text-white underline underline-offset-4"
            >
              or submit a form
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
