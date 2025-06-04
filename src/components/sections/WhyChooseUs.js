"use client"

import { CheckCircle, ShieldCheck, Server, PenTool } from "lucide-react"

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Advanced Recovery Labs",
      description:
        "ISO-certified cleanrooms & diagnostic tools ensure optimal recovery conditions.",
    },
    {
      icon: PenTool,
      title: "Transparent Process",
      description:
        "Clear communication, fixed quotes, and no hidden fees. You're informed every step of the way.",
    },
    {
      icon: Server,
      title: "Decades of Experience",
      description:
        "Our engineers have recovered data from over 100,000+ drives in countless scenarios.",
    },
    {
      icon: ShieldCheck,
      title: "Proven Success Rate",
      description:
        "Our recovery success rate stands at 99%, providing peace of mind to our clients.",
    },
  ]

  return (
    <section className="bg-muted py-12 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-heading text-heading mb-6">Why Choose Us</h2>
        <div className="space-y-6">
          {advantages.map((adv, index) => {
            const Icon = adv.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <Icon className="text-accent h-8 w-8 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-heading mb-1">{adv.title}</h3>
                  <p className="text-body">{adv.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
