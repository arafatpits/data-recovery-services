import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";
import ConsultationForm from "@/components/forms/consultation-form";
import { Phone } from "lucide-react";

export default function Hero({ title, subtitle, imgsrc }) {
  const heroTitle = title || "Lost Your Data?";
  const heroDescription =
    subtitle ||
    "Professional data recovery services with 95% success rate. No data, no fee guarantee.";
  const imageSrc = imgsrc || "/images/default-hero.jpg";

  return (
    <>
      <div className="hidden lg:flex bg-black/80 text-white py-16">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex gap-12 items-start">
          {/* Left: Content */}
          <div className="flex-1 min-w-0">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={imageSrc}
                alt={heroTitle}
                height={400}
                width={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h1 className="text-4xl font-bold text-white">{heroTitle}</h1>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-white max-w-xl">{heroDescription}</p>
              <a
                href={`tel:${COMPANY_INFO.phone.tel}`}
                className="flex items-center gap-3 text-5xl font-primary text-accent font-bold hover:underline"
              >
                <Phone size={40} strokeWidth={1.5} />
                {COMPANY_INFO.phone.display}
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md shrink-0">
            <ConsultationForm
              formTitle="HOW MUCH WILL IT COST?"
              formDescription="Get A Free, No-Obligation Quote"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden bg-black/80 text-white">
        <div className="relative h-[350px] md:h-[400px]">
          <Image
            src={imageSrc}
            alt={heroTitle}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{heroTitle}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-4 max-w-md">{heroDescription}</p>
            <a
              href={`tel:${COMPANY_INFO.phone.tel}`}
              className="flex items-center gap-3 text-4xl md:text-5xl font-primary text-accent font-bold hover:underline"
            >
              <Phone size={36} strokeWidth={1.5} />
              {COMPANY_INFO.phone.display}
            </a>
          </div>
        </div>

        <ConsultationForm
          formTitle="HOW MUCH WILL IT COST?"
          formDescription="Get A Free, No-Obligation Quote"
        />
      </div>
    </>
  );
}
