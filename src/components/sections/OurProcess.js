import { MessageCircle, Package, Database } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeader from "../ui/SectionHeader"

const steps = [
  {
    title: "Consultation & Case Review",
    description:
      "We start with a free, no-obligation consultation to understand your data loss scenario—whether it's accidental deletion, hardware failure, or something more complex. Our specialists walk you through the process, set expectations, and answer any questions before you commit.",
    icon: MessageCircle,
    step: "01",
  },
  {
    title: "Secure Shipping & Expert Diagnostics",
    description:
      "You'll receive a prepaid, insured shipping label to safely send us your device. Upon arrival, our engineers conduct a full diagnostic in a controlled environment. We then provide a transparent quote, customized to your device, damage type, and required turnaround—no hidden fees, ever.",
    icon: Package,
    step: "02",
  },
  {
    title: "Precision Recovery & Encrypted Return",
    description:
      "Once approved, we begin recovery using industry-leading tools and techniques tailored to your case. Your recovered data is transferred to a hardware-encrypted external drive, then securely shipped back. We also provide status updates throughout, so you're never in the dark. If recovery isn't possible, there's no charge—period.",
    icon: Database,
    step: "03",
  },
]

export default function ProcessSection() {
  return (
    <section className="pt-10 lg:pt-16 pb-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader title="How We Recover Your Data" description="A Clear, 3-Step Process Focused on Precision, Security, and Results"/>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-0.5 bg-border">
              <div className="absolute left-1/6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              <div className="absolute right-1/6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <Card className="h-full gap-4 lg:gap-5 border border-border bg-card text-heading shadow-sm">
                    <CardHeader>
                      <div className="mb-6">
                        <div className="relative w-20 h-20">
                          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md z-20">
                            {step.step}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-body text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white"
          >
            <Database className="w-5 h-5" />
            <span>Start Your Recovery Process</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
