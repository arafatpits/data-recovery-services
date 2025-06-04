import { MessageCircle, Package, Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
];

export default function ProcessSection() {
  return (
    <section className="pt-16 pb-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading mb-4">
            How We Recover Your Data
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A Clear, 3-Step Process Focused on Precision, Security, and Results
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-0.5 bg-border">
              <div className="absolute left-1/6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              <div className="absolute right-1/6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full gap-3 transition-all border-0 bg-accent text-primary-foreground shadow-md">
                    <CardHeader>
                      <div className="relative mb-6">
                        <div className="relative w-20 h-20">
                          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-heading text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20">
                            {step.step}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-heading font-semibold">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-primary-foreground text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium"
          >
            <Database className="w-5 h-5" />
            <span>Start Your Recovery Process</span>
          </Button>
        </div>
      </div>
    </section>
  );
}