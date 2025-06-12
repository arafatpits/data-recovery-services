import { Suspense } from "react";
import Hero from "./sections/hero";

function HeroFallback() {
  return (
    <section className="w-full bg-gray-900 text-white py-14 min-h-[520px] sm:min-h-[600px] lg:min-h-[678px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full rounded bg-gray-700 animate-pulse" />
      </div>
    </section>
  );
}


export default function HeroWrapper() {
  return (
    <Suspense fallback={<HeroFallback />}>
      <Hero />
    </Suspense>
  );
}
