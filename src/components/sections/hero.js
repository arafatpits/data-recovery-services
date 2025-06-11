import { COMPANY_INFO } from "@/lib/constants"
import ConsultationForm from "@/components/forms/consultation-form"
import { Phone } from "lucide-react"

export default function Hero({ title, title1, title2, subtitle, imgsrc }) {
  const heroTitle1 = title1 || title 
  const heroTitle2 = title2

  const heroDescription = subtitle
  const imageSrc = imgsrc

  const renderTitle = () => {
    if (heroTitle1 && heroTitle2) {
      return (
        <>
          <span>{heroTitle1}</span>
          <br />
          <span>{heroTitle2}</span>
        </>
      )
    }
    if (heroTitle1) {
      return <span>{heroTitle1}</span>
    }
    return null
  }

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
        <div className="flex-1 text-left sm:text-center lg:text-left">
          {heroTitle1 && (
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {renderTitle()}
            </h1>
          )}

          {heroDescription && (
            <p className="text-base sm:text-lg lg:text-xl max-w-xl sm:mx-auto lg:mx-0 mb-6">
              {heroDescription}
            </p>
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

        <div className="w-full sm:w-auto lg:max-w-md">
          <ConsultationForm className="bg-accent w-full" />
        </div>
      </div>
    </section>
  )
}
