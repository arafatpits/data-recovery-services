import { Button } from "@/components/ui/button"
import { Phone, FileText, CheckCircle } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export default function FinalCTA() {
  return (
    <section className="bg-primary-800 pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading + Description */}
        <div className="text-left sm:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Recover Your Data?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-10 max-w-3xl sm:mx-auto leading-relaxed">
            Our engineers are on standby 24/7. Speak with a specialist or request a free quote to get started.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto inline-flex items-center gap-4 px-8 py-5 text-lg font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-lg"
            asChild
          >
            <a href={`tel:${COMPANY_INFO.phone.tel}`}>
              <Phone className="w-6 h-6" />
              Call {COMPANY_INFO.phone.display}
            </a>
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto inline-flex items-center gap-4 px-8 py-5 text-lg font-medium"
          >
            <FileText className="w-6 h-6" />
            Get Free Quote
          </Button>
        </div>

        {/* Features */}
        <ul className="mt-10 flex flex-wrap justify-center items-center gap-4 text-sm text-white">
          {["No data, no fee", "Free diagnostics", "24/7 emergency service"].map((text, idx, arr) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>{text}</span>
              {idx !== arr.length - 1 && (
                <span className="hidden sm:inline-block w-px h-4 bg-white/30 mx-3" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
