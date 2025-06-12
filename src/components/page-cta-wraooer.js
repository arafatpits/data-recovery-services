import { Suspense } from "react"
import PageCTA from "./sections/PageCta"

function PageCTAFallback({ className = "" }) {
  return (
    <section className={`bg-primary-800 pt-16 pb-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-left sm:text-center animate-pulse">
          <div className="h-12 bg-primary-700 rounded mb-6 w-3/4 mx-auto"></div>
          <div className="h-6 bg-primary-700 rounded mb-3 w-2/3 mx-auto"></div>
          <div className="h-6 bg-primary-700 rounded mb-8 w-1/2 mx-auto"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-5 items-start sm:items-center">
          <div className="text-left sm:text-center animate-pulse">
            <div className="h-5 bg-primary-700 rounded mb-2 w-48"></div>
            <div className="h-10 bg-primary-700 rounded w-56"></div>
          </div>

          <div className="sm:pt-0 animate-pulse">
            <div className="h-6 bg-primary-700 rounded w-32"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PageCTAWrapper({ className = "" }) {
  return (
    <Suspense fallback={<PageCTAFallback className={className} />}>
      <PageCTA className={className} />
    </Suspense>
  )
}
