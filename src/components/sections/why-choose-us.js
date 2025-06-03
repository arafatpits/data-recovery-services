"use client"

import { CheckCircle, ShieldCheck, Server, PenTool } from "lucide-react"

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "State-of-the-Art Facilities",
      description:
        "ISO-certified cleanrooms & advanced diagnostic tools ensure the highest recovery chances.",
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
        "Our seasoned engineers have recovered data from over 100,000+ drives & countless scenarios.",
    },
    {
      icon: ShieldCheck,
      title: "Industry-Leading Success Rate",
      description:
        "Our data recovery success rate stands at 99%, providing peace of mind for our clients.",
    },
  ]

  return (
    <div className="bg-muted rounded-xl p-8 space-y-6">
      <h2 className="text-3xl font-heading text-heading mb-6">Why Choose Us</h2>

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
  )
}
