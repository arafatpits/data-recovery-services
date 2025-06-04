import Hero from "@/components/sections/hero"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

export default function PageShell({ heroProps, children }) {
  return (
    <>
      <Hero {...heroProps} />
      <div className="bg-white text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 min-w-0">{children}</div>
            <div className="w-full lg:max-w-md shrink-0 lg:sticky lg:top-24">
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
