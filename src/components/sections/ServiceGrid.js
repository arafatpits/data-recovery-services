import ServiceCard from "@/components/ui/ServiceCard"

export default function ServiceGrid({ services = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  )
}
