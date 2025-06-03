import { CheckCircle, AlertTriangle, Clock, Shield } from "lucide-react"

export default function HardDriveDetails() {
  const symptoms = [
    "Clicking or grinding noises",
    "Drive not recognized by computer",
    "Blue screen of death (BSOD)",
    "Slow file access or freezing",
    "Error messages when accessing files",
  ]

  const process = [
    {
      icon: AlertTriangle,
      title: "Free Evaluation",
      description: "We assess your drive and provide a detailed diagnosis within 24 hours.",
    },
    {
      icon: Shield,
      title: "Clean Room Recovery",
      description: "Our ISO-certified clean room ensures safe handling of your damaged drive.",
    },
    {
      icon: CheckCircle,
      title: "Data Extraction",
      description: "Using specialized tools, we extract your data with maximum recovery rates.",
    },
    {
      icon: Clock,
      title: "Delivery",
      description: "Your recovered data is securely delivered on your preferred media.",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Main Description */}
      <div>
        <h2 className="text-4xl font-bold mb-6">Hard Drive Data Recovery</h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          When your hard drive fails, every second counts. Our expert technicians use state-of-the-art equipment and
          proven techniques to recover your critical data from damaged, corrupted, or failed hard drives.
        </p>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
          <p className="text-lg font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
            95% Success Rate for Hard Drive Recovery
          </p>
          <p className="text-gray-300">
            Our advanced recovery techniques and ISO-certified clean room facilities ensure the highest possible success
            rates in the industry.
          </p>
        </div>
      </div>

      {/* Common Symptoms */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Common Hard Drive Failure Symptoms</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {symptoms.map((symptom, index) => (
            <div key={index} className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-gray-300">{symptom}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery Process */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Our Recovery Process</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {process.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <step.icon className="w-8 h-8" style={{ color: "var(--color-accent)" }} />
                <h4 className="text-xl font-semibold">{step.title}</h4>
              </div>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
        <h3 className="text-2xl font-bold mb-4 text-center">Transparent Pricing</h3>
        <div className="text-center space-y-4">
          <div>
            <span className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>
              $0
            </span>
            <span className="text-xl text-gray-300 ml-2">Evaluation Fee</span>
          </div>
          <div>
            <span className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>
              $299-$1,999
            </span>
            <span className="text-xl text-gray-300 ml-2">Recovery Fee (only if successful)</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our "No Data, No Fee" guarantee means you only pay if we successfully recover your data. Final pricing
            depends on the complexity of your case.
          </p>
        </div>
      </div>
    </div>
  )
}
