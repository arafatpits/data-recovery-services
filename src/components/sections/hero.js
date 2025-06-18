import dynamic from 'next/dynamic'
const ConsultationForm = dynamic(
  () => import('@/components/forms/consultation-form'),
  { ssr: true }
)

export default function Hero() {
  return (
   
        <div id="consultation-form" className="w-full min-h-screen sm:w-auto lg:max-w-md">
          <ConsultationForm />
        </div>

  )
}
