import { Suspense } from "react"
import Hero from "./sections/hero"

function HeroFallback() {
  return (
    <section className="relative w-full text-white py-14 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 text-left sm:text-center lg:text-left">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-8 bg-gray-700 rounded mb-4 w-2/3"></div>
            <div className="h-6 bg-gray-700 rounded mb-6 w-1/2"></div>
            <div className="bg-black/40 p-4 rounded-md inline-block">
              <div className="h-4 bg-gray-700 rounded mb-2 w-32"></div>
              <div className="h-12 bg-gray-700 rounded w-48"></div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto lg:max-w-md">
          <div className="bg-gray-700 rounded-lg p-6 animate-pulse">
            <div className="h-8 bg-gray-600 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HeroWrapper() {
  return (
    <Suspense fallback={<HeroFallback />}>
      <Hero />
    </Suspense>
  )
}
