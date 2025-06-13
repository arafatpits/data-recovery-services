import { COMPANY_INFO } from "@/lib/constants"

export default function PageCTA({ className = "" }) {
  return (
    <section className={`bg-primary-800 pt-16 pb-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-left sm:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Need Help with a Hard Drive Failure?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-3xl sm:mx-auto leading-relaxed">
            Whether it's clicking, dead, or not recognized — we specialize in secure hard drive recovery.
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
        </div>
      </div>
    </section>
  )
}
