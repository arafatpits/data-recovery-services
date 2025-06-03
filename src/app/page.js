import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Hard Drive Data Recovery Services"
        subtitle="Professional data recovery services with 95% success rate. No data, no fee guarantee."
        imageSrc="/images/data-recovery-workspace.jpg" 
      />
   
    </div>
  )
}
