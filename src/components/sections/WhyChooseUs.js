import { CheckCircle, ShieldCheck, Server, PenTool } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="pt-10 lg:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          description="What sets our data recovery services apart from the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {advantages.map((adv, index) => {
            const Icon = adv.icon
            return (
              <Card key={index} className="bg-primary-800 text-white h-full p-0">
                <CardContent className="p-6 flex flex-col items-start">
                  <Icon className="h-8 w-8 text-accent mb-4 mt-1" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-base text-white/90 leading-relaxed">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
