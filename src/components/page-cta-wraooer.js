import { Suspense } from "react";
import PageCTA from "./sections/PageCta";

function PageCTAFallback({ className = "" }) {
  return (
    <section className={`bg-primary-800 py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-32 rounded bg-primary-700 animate-pulse" />
      </div>
    </section>
  );
}

export default function PageCTAWrapper({ className = "" }) {
  return (
    <Suspense fallback={<PageCTAFallback className={className} />}>
      <PageCTA className={className} />
    </Suspense>
  );
}
