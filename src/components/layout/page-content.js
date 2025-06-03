import WhyChooseUs from "../sections/why-choose-us"

export default function PageContent({ children }) {
  return (
    <div className="bg-white text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Sidebar - Why Choose Us */}
          <div className="w-full lg:max-w-md shrink-0 lg:sticky lg:top-24">
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </div>
  )
}
